//models/Expense.js
//var mongoose = require('mongoose');
var hyena = require('hyena')
//var Schema = mongoose.Schema;
var Schema = hyena.Schema;

var expenseSchema = new Schema({
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
module.exports = hyena.model('Expense', expenseSchema);
