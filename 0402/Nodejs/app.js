var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


// app.get('/', function (req, res){
//   res.sendfile("글쓰기.html");
// });

app.get('/hi', function (req, res){
  // res.sendfile("js.html");
});

app.get('/hi2', function (req, res){
  res.sendfile("js2.html");
});

app.get('/hi3', function (req, res){
  res.sendfile("js3.html");
});

app.get('/hi4', function (req, res){
  res.sendfile("move.html");
});



console.log("running22");
