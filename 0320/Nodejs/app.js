var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


// app.get('/', function (req, res){
//   res.sendfile("글쓰기.html");
// });

app.get('/file', function (req, res){
  res.sendfile("files/table.html");
});
app.get('/file2', function (req, res){
  res.sendfile("files/style.html");
});
app.get('/file3', function (req, res){
  res.sendfile("files/style2.html");
});


console.log("running22");
