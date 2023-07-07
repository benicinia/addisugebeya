var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db=require('../database');
var path = require('path');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var hash = require('pbkdf2-password')()
var hasher = require('pbkdf2-password')()
var fs = require('fs');
var schemaFilePath = path.join(__dirname, 'schema.sql');
const schemaInventory = path.join(__dirname, 'inventory.sql');
const schemaProducts = path.join(__dirname, 'products.sql');
router.use(express.json());
/* GET users listing. */
router.post('/', function(req, res) {
  var bod=req.body
  var fname=bod.fname
  var lname= bod.lname
  var mname=bod.mname
  var gender=bod.gender
  var phno=bod.phone_no
  hash({ password: bod.password, salt:'Godisgreat' }, function (err, pass, salt, hash) {
    if (err) throw err;
    bod.password.salt = salt;
    bod.password.hash = hash;
    var sqlx = 'INSERT INTO customer (??, ??, ??, ??) VALUES (?, ?, ?, ?) ';
  
    var param = ['fname', 'lname',       'email',      'pwd',
      fname,      lname,      bod.email,       hash]
    db.query(sqlx, param, function (err, result, fields) {
      if (err) res.send('err.number')
      const uid = result.insertId
      var tableName='hsfs'
      var sqlc = `CREATE TABLE ${`products`+uid} (product_id INT NOT NULL AUTO_INCREMENT, 
        name VARCHAR(255),price VARCHAR(255),data  mediumtext COLLATE utf8mb4_bin, PRIMARY KEY(product_id))`;
      
      db.query(sqlc,  function (err, resultc, fields) {
        if (err) throw err
        var sqlt = `CREATE TABLE ${`trans`+uid} (trans_id INT NOT NULL AUTO_INCREMENT, 
          trans_date VARCHAR(255),remarks VARCHAR(255),data  mediumtext COLLATE utf8mb4_bin, PRIMARY KEY(trans_id))`;
       
         
        db.query(sqlt,  function (err, resultt, fields) {
          if (err) throw err
  
          
        })

      })
    
  })


})
      })
    



module.exports = router;
