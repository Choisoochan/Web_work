var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


// app.get('/', function (req, res){
//   res.sendfile("글쓰기.html");
// });

app.get('/hello', function (req, res){
  res.sendfile("js.html");
});
app.get('/JS', function (req, res){
  res.sendfile("newJS.html");
});


console.log("running22");
