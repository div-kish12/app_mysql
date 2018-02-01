//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//const Sequelize = require('sequelize');

//var mongoose = require('mongoose');
var hyena = require('hyena');
var connection = require('hyena/lib/mysql');
var Schema = hyena.Schema;

/*hyena.connect(connection({
  user: "root",
  password: "root",
  database: "it_services"
}));*/



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
//const sequelize = new Sequelize('mysql://divya:Adityasucks@25@localhost/it_services');

//mongoose.connect('mongodb://divya_kishore:1234@localhost');
hyena.connect('mysql://divya:Adityasucks@25@localhost/it_services2');
app.use('/', router);


module.exports=app;
