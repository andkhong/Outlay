const request = require('request');

const scraperController = {
  getInstragramPics: function(req, res, next){
    const link = 'https://www.instagram.com';
    const user = '/' + req.body.user + '/';

    // Request User's Instagram HTML Page
    request(link + user, function(error, response, html){
      if(!error && response.statusCode == 200){
        // Initial Declared Variables
        let metaData = {}
        let imageArray = [];
        // Work on HTML String to gather Images & Image Counts
        let data = html.split('"thumbnail_src": "')
        for(let i = 1; i < data.length; i++){
          let tempString = '';
          for(let j = 0; j < data[i].length; j++){
            if(data[i][j] === ',') break;
            tempString += data[i][j];
          }
          imageArray.push(tempString);
        }
        metaData.images = imageArray;
        // Once request is processed, send the API to route endpoint
        res.send(metaData)
      }
    })
  }
}

module.exports = scraperController;
