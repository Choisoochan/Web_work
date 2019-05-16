var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);




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


app.get('/payment', function (req, res){
  var userInputPrice = req.query.price;
  var responseText = "구매 불가"

  var itemPrice = [
    {itemName : "item1", price:1000},
    {itemName : "item2", price:5000},
    {itemName : "item3", price:10000},
    {itemName : "item4", price:30000},
    {itemName : "item5", price:50000},
    {itemName : "item6", price:100000},
    {itemName : "item7", price:500000},
  ]
  for (var i = 0; i < itemPrice.length; i++) {
    if(itemPrice[i].price <= userInputPrice){
      responseText = itemPrice[i].itemName;
    }
  }
  res.send(responseText)
});


app.get('/getPayment', function (req, res){
  res.sendfile("payment.html")
});

app.get('/getCarPrice', function (req, res){
  var brand = req.query.brand;
  var color = req.query.color;
  var brandPrice = [2100, 1300, 1500, 3500, 3200];
  var colorPrice = [100,120,200,130,80];
  res.send(brandPrice[brand]+colorPrice[color] + "만원");
});

app.get('/car', function (req, res){
  res.sendfile("car.html")
});

app.get('/function', function (req, res){
  res.sendfile("functionTest.html")
});


console.log("running22");
