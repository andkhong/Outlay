const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
      'webpack-hot-middleware',
      path.join(__dirname, './src/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/public'
  },
  plugins: [
    new ExtractTextPlugin({
			filename: "js/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
			disable: false,
			allChunks: true
		}),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ],
    resolve:{
      extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
    }
  }
}
