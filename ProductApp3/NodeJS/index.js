
var http = require('http');
const express = require('express');
var port = 3000; //port in which backend running
var app = express();
var appRoutes = require('./routes/appRoutes');// importing routes
var mongoose = require('mongoose');//import the mongoose
var bodyParser = require('body-parser');//body parser configure
var cors = require('cors'); //linking the front-end and back-end for data transfer
 
mongoose.connect('mongodb://localhost:27017/ProductDb');

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }));//body parser call
app.use(bodyParser.json());//communicates json data
app.use('/',appRoutes);//as a middleware


http.createServer(app).listen(port);// app listening to the backend

console.log("running backend at :", port);