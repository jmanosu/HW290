/*
 * Write your server code in this file.
 */

var http = require('http'),
    fs = require('fs'),
    util = require('util');

function displayFile(response, data, contentType){
    response.writeHead(200, {'Content-Type': contentType});
    response.write(data);
    response.end();
}
var indexHTML, styleCSS, indexJS, Error404;

console.log('loading files');

fs.readFile('public/404.html', "UTF8", function(err, data) {
    if (!err){ Error404 = data} });

fs.readFile('public/index.html', "UTF8", function(err, data) {
    if (!err){ indexHTML = data} });

fs.readFile('public/style.css', "UTF8", function(err, data) {
    if (!err){ styleCSS = data} });

fs.readFile('public/index.js', "UTF8", function(err, data) {
    if (!err){ indexJS = data} });


function readPublicFile(fileName, storage, response){
  fs.readFile(fileName, function(err, data){
    if(err){
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write(Error404);
      response.end();
    }else{
      response.writeHead(200, {'Content-Type': 'text/'+fileName.split('.')[1]});
      response.write(data);
      storage = data;
      response.end();
    }


  });
}

var server = http.createServer(function requestHandler(req, res){
  var url = req.url;
  if(url == '/index.html' || url == '/'){
    displayFile(res, indexHTML, 'html');
  }else if(url == '/style.css'){
    displayFile(res, styleCSS, 'text/css');
  }else if(url == '/index.js'){
    displayFile(res, indexJS, 'js');
  }else if(url == '/404.html'){
    displayFile(res, Error404, 'text/html')
  }else{
    var temp;
    readPublicFile('public'+url,temp ,res);
  }
});


server.listen(process.env.PORT || 3000);
