const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');
const port = (process.env.PORT || 8080);
const app = express();
const scraperController = require('./scraperController.js');

// Middleware to handle CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// Middleware to handle Data Parsing
app.use(bodyParser.json());
// Middleware to handle Static Assets
// Comment out during developement mode
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, './../index.html'));
});
app.post('/*', scraperController.getInstragramPics);

app.listen(port, function(){
  console.log(`Build Mode: Listening at http://localhost:`, port)
})
