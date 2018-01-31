//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
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
//mongoose.connect('mongodb://divya_kishore:1234@localhost');
hyena.connect('mysql://root:root@localhost/it_services');
app.use('/', router);
module.exports=app;
