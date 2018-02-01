//models/Expense.js
//var mongoose = require('mongoose');
var hyena = require('hyena')
//var Schema = mongoose.Schema;
var Schema = hyena.Schema;
//const Sequelize = require('sequelize');
//const sequelize = new Sequelize('mysql://divya:Adityasucks@25@localhost/it_services');

/*var expenseSchema = new Schema({
  //description: String,
  //amount: Number,
  //month: String,
  //year: Number

  name: String,
  email: String,
  phone: Number,
  company: String,
  year: Number
});

hyena.on('error', function (err) {
  console.log('Hyena:', err.stack);
});
*/
var expenseSchema = hyena.model('expenseSchema', new Schema({
  name: { type: "string", required: true },
  email: { type: "string", required: true },
  phone: { type: "number", required: true },
  company: { type: "string", required: true },
  year: { type: "number", required: true },

}));

/*
const expenseSchema = sequelize.define('expenseSchema', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.STRING
  }
});
*/


module.exports = hyena.model('Expense', expenseSchema);
