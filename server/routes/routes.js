//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Expense = require('../../models/Expense');
router.get('/', function(req, res){
  res.render('index')
});
router.route('/insert')
.post(function(req,res) {
 var expense = new Expense();
  
  expense.name = req.body.name;
  expense.email = req.body.email;
  expense.phone = req.body.phone;
  expense.company = req.body.company;
  expense.year = req.body.year;


expense.save(function(err) {
      if (err)
        res.send(err);
      res.send('Customer log successfully added!');
  });
})
router.get('/delete', function(req, res){
 var id = req.query.id;
 Expense.find({_id: id}).remove().exec(function(err, expense) {
  if(err)
   res.send(err)
  res.send('Customer log successfully deleted!');
 })
});
router.get('/getAll',function(req, res) {
 var yearRec = req.query.year;
  Expense.find({year: yearRec}, function(err, expenses) {
   if (err)
    res.send(err);
   res.json(expenses);
  });
 
});
module.exports = router;
