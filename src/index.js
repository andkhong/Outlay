const Server = require('./server/server.js');
const port = (process.env.PORT || 8080);
const app = Server.app();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./../webpack.dev.config');

  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
  app.use(webpackHotMiddleware(compiler));

  // app.listen(port, function(){
  //   console.log(`Development Mode: Listening at http://localhost:`, port)
  // })

}

app.listen(port, function(){
  console.log(`Build Mode: Listening at http://localhost:`, port)
})
