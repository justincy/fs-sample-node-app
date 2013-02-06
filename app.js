var express = require('express');
var fs = require('fs-js-sdk');

// Create express app
var app = express();
app.set('view engine', 'ejs');

// Setup FamilySearch API Client
var fsClient = new fs.Client('');

app.get('/discovery', function(req, res){
  fsClient.getDiscovery(function(discovery){
    res.send(discovery);
  });
});

// Bind app to port
var port = process.env.PORT || 3000;
app.listen(port);