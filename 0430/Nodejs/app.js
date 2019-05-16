var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


// app.get('/', function (req, res){
//   res.sendfile("글쓰기.html");
// });

app.get('/hi', function (req, res){
  res.sendfile("웹중간고사정답.html");
});

app.get('/hi2', function (req, res){
  res.sendfile("midTerm.html");
});

app.get('/hi3', function (req, res){
  res.sendfile("jQuery.html");
});

app.get('/hi4', function (req, res){
  console.log(req.query.a,req.query.b);
  res.send("Hello world");
});

app.get('/sum', function (req, res){
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var num3 = Number(req.query.num3);
  console.log(num1 * num2 * num3);
  res.send(`multiple is ${num1 * num2 * num3}`);
});

app.get('/sumform', function (req, res){
  res.sendfile("sum.html")
});


app.get('/buy', function (req, res){
  var pay = Number(req.query.pay)
  var priceTable =
  [{name:"item1", price:1000},
  {name:"item2", price:5000},
  {name:"item3", price:10000},
  {name:"item4", price:30000},
  {name:"item5", price:50000},
  {name:"item6", price:100000},
  {name:"item7", price:500000}]
  var finalresult = "구매불가";
  for (var i = 0; i < priceTable.length; i++) {
    if(pay>=priceTable[i].price){
      finalresult = priceTable[i].name
    }
  }
  res.send(finalresult);
});


app.get('/buyform', function (req, res){
  res.sendfile("buy.html")
});



console.log("running22");
