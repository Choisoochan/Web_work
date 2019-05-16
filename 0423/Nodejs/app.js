var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


// app.get('/', function (req, res){
//   res.sendfile("글쓰기.html");
// });

app.get('/hi', function (req, res){
  res.sendfile("midTerm.html");
});




console.log("running22");
