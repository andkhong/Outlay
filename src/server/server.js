const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const scraperController = require('./scraperController');

module.exports = {
  app: function() {
    const app = express();
    // Middleware to handle CORS
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    })

    // Middleware to handle Static Assets
    // Comment out during developement mode
    app.use('/public', express.static('public'));

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, './../../index.html'));
    })

    // Middleware to handle Data Parsing
    app.use(bodyParser.json());
    app.post('/*', scraperController.getInstragramPics);

    return app;
  }
}
