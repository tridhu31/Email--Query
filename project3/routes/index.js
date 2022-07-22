const { response } = require('express');
var express = require('express');
var router = express.Router();
var database = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Query App' });
});
router.get('/show', function(req,res,next){})
router.post('/submit', function(req,res,next)
{
database.create({
  Email: req.body.Email,
  Query: req.body.Query
})
.then(() =>{
  res.redirect("/")
})
})

module.exports = router;
