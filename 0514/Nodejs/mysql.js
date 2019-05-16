var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'webui'
});


app.get('/select', function (req, res){
  var selectQuery = `select title, text from news`;
  connection.query(selectQuery,
    function(err, rows, fields){
      if(err) throw err;
      console.log(rows);
      res.send(rows);
    }
  )

});

app.get('/new', function (req, res){
  res.sendfile("new.html");


});

app.get('/insert', function (req, res){
  res.sendfile("insert.html");
});

app.post('/insert', function (req, res){

  var data01 = req.body.text01;
  var data02 = req.body.text02;

  var intsertQuery = `INSERT INTO news (title, text) VALUES ('${data01}', '${data02}')`;
  connection.query(intsertQuery,
    function(err, rows, fields){
      if(err) throw err;
      console.log(rows);
      res.send(rows);
    }
  )
});


app.get('/newsDeleteForm', function (req, res){

  res.sendfile("newsDelete.html");

  var deleteQuery = `truncate news`
  connection.query(deleteQuery,
    function(err, rows, fields){
      if(err) throw err;
      console.log(rows);
      res.send(rows);
    }
  )
});

app.get('/newsDeleteForm2', function (req, res){
  var index = Number(req.query.indexNum) + 1;
  console.log(index);
  var deleteQuery = `delete from news where no=${index}`

  connection.query(deleteQuery,
    function(err, rows, fields){
      if(err) throw err;
      console.log(deleteQuery);
      res.send(rows);
    }
  )

});
