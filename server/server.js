const express = require('express');
const app = express();
const { join } = require('path');
const port = (process.env.PORT || 8080);
const bodyParser = require('body-parser');

const scraperController = require('./scraperController.js');

// Start Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use('/', express.static('dist'));
app.use(bodyParser.json());
// End Middleware

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, './../dist/index.html'));
});
app.post('/', scraperController.getInstragramPics);

app.listen(port, function(){
  console.log(`Build Mode: Listening at http://localhost:`, port)
})
