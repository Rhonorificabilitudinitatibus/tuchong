var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//测试用
//router.get("/data",function(req,res){
//	
//	res.render("data",{})
//})
module.exports = router;
