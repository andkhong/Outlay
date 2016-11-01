const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const scraperController = require('./scraperController');

module.exports = {
  app: function() {
    const app = express();
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, './../index.html'));
    })

    // Middleware to Handle API CORS
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    })
    // Middleware to handle Data Parsing
    app.use(bodyParser.json());
    app.post('/*', scraperController.getInstragramPics);

    return app;
  }
}
