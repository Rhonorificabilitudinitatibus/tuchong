var express = require('express');
var router = express.Router();
var url = require("url")
var MySql = require("./../md/mysql.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function(req, res, next) {
  res.send('登录');
});
router.get('/updateInfo', function(req, res, next) {
  MySql.connect((db) => {
    
    MySql.update(db,function(){
      res.send("ok")
    });
    
  })
});
router.get('/deleteUser', function(req, res, next) {
  MySql.connect((db) => {
    
    MySql.delete(db,function(){
      res.send("ok")
    });
    
  })
});
router.get('/getUserList', function(req, res, next) {
  /**
   * pageNumber   第几页  从0开始
   * pageSize     一页显示几条  默认为3
   */
  var obj = url.parse(req.url, true).query;
  var pageNumber = obj.pageNumber ? obj.pageNumber : 0;
  var pageSize = obj.pageSize ? obj.pageSize : 3;
   MySql.connect((db) => {
//  MySql.find(db, "user", {}, {"_id":0}, (data) => {
//    res.send(data)
//  })
//  MySql.sort(db, "user", {}, {"_id":0}, {"userID":-1}, (data) => {
//    res.send(data)
//  })
     MySql.paging(db, "user", {}, {"_id":0}, pageSize, pageNumber, (data) => {
      res.send(data)
    })
  });
//res.send('登录');
});
router.get('/register', function(req, res, next) {
  var obj = url.parse(req.url, true).query;
  console.log(obj)
  MySql.connect((db) => {
    MySql.insert(db, 'user', obj ,(result) => {
      console.log("插入成功")
      res.send("11")
    });
  });
  
//res.send('注册');
});
//推荐
router.get("/data",function(req,res,next){
	MySql.connect((db)=>{
		MySql.find(db,"movie",{},{},(data)=>{
			res.send(data)
//			MySql.close()
		})
	})
})
//测试专用
router.get("/test",function(req,res,next){
	MySql.connect((db)=>{
		MySql.find(db,"test",{},{},(data)=>{
			res.send(data)
//			MySql.close()
		})
	})
})

//  MySql.find(db, "user", {}, {"_id":0}, (data) => {
//    res.send(data)
//  })
module.exports = router;
