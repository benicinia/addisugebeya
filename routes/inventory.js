var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db=require('../database');
var cons = require("../constants");
var path = require('path');
var session = require('express-session');

var hash = require('pbkdf2-password')()
var hasher = require('pbkdf2-password')()
var fs = require('fs');
var multer = require("multer");
const app = module.exports = express();
router.use(express.json());
const MySQLStore = require('express-mysql-session')(session);
const options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'gebeya'
};
const connection = mysql.createConnection(options); // or mysql.createPool(options);
const sessionStore = new MySQLStore({}/* session store options */, connection);
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));
/* GET home page. */
router.get('/', function(req, res, next) {
  var sess= req.session
  
    
    let sql = `SELECT * FROM products25`;
    db.query(sql,  (err, prd) => {
        //res.send(prd)
      
        
 res.render('products', { title: 'Express',prd:prd });
 // res.send(sess.i)
})
});
router.get('/edit', function(req, res, next) {
  var sess= req.session
  
    
    let sql = `SELECT * FROM products25`;
    db.query(sql,  (err, prd) => {
        //res.send(prd)
      
        
 res.render('nproduct', { title: 'Express',prd:prd });
 // res.send(sess.i)
})
});
router.get('/add', function(req, res, next) {
  var sess= req.session
  var sql1=db.query('SELECT * FROM catagory ', function (err, data, fields) {
    var sql1=db.query('SELECT * FROM catagorys ', function (err, datas, fields) {
    
    let sql = `SELECT * FROM products25`;
    db.query(sql,  (err, prd) => {
        //res.send(prd)
      
        
 res.render('addnewprd', { title: 'Express',prd:prd,data:data,datas:datas });
 // res.send(sess.i)
})})})
});
router.get('/opts', function(req, res, next) {
  var sess= req.session
  var sql1=db.query('SELECT * FROM catagory ', function (err, data, fields) {
    var sql1=db.query('SELECT * FROM catagorys ', function (err, datas, fields) {
    
    let sql = `SELECT * FROM products25`;
    db.query(sql,  (err, prd) => {
        //res.send(prd)
      
        
 res.render('add_opt', { title: 'Express',prd:prd,data:data,datas:datas });
 // res.send(sess.i)
})})})
});
module.exports = router;
