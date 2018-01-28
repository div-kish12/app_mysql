//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
module.exports = mongoose.model('Expense', expenseSchema);
