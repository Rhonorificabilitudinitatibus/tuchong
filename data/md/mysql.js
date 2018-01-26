var MongoClient = require("mongodb").MongoClient;
var DB_CONNECTSTR = "mongodb://localhost:27017/picture";



var MySql = {
  connect: (callback) => {
    MongoClient.connect(DB_CONNECTSTR , (err, db) => {
      if(err){
        console.log("数据库连接失败")
      }else{
        console.log("数据库连接成功")
        callback(db)
      }
    })
  },
  /*
   * 
   */
  insert(db, collName, insertData,callback){
    db.collection(collName).insert(insertData, (err, result) => {
      if(err){
        console.log("插入失败");
      }else{
        callback(result)
      }
    })
  },
  /*
   * 
   */
  find(db, collName, queryObj, showObj, callback){
    db.collection(collName).find(queryObj,showObj).toArray((err, data) => {
      callback(data)
    })
  },
  sort(db, collName, queryObj, showObj, sortObj, callback){
    db.collection(collName).find(queryObj, showObj).sort(sortObj).toArray((err, data) => {
      callback(data)
    })
  },
  paging(db,collName, queryObj, showObj, pageSize, pageNumber,callback){
//  0 5 0   pageNumber pageSize pageNumber*pageSize
//  1 5 5
//  2 5 10
    db.collection(collName).find(queryObj,showObj).limit(pageSize).skip(pageNumber*pageSize).toArray((err, data) => {
      callback(data)
    })
  },
  update(db,collName,queryObj, updateObj, callback){
    db.collection(collName).update(queryObj,updateObj,function(err, result){
      callback(result)
    })
  },
  delete(db,collName,deleteObj, callback){
    db.collection(collName).remove(deleteObj,function(err, result){
      callback(result)
    })
  }
}

module.exports = MySql;