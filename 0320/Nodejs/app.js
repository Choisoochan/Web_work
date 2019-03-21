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

// app.get('/file', function (req, res){
//   res.sendfile("files/");
// });

// app.get('/file2', function (req, res){
//   res.sendfile("files/rawfile");
// });
//
// app.get('/image', function (req, res){
//   res.sendfile("images/cat.jpeg");
// });
//
// app.get('/music', function (req, res){
//   res.sendfile("sounds/music.mp3");
// });


console.log("running22");
