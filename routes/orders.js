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
  
    
    let sql = `SELECT * FROM orders3 `;
    db.query(sql,  (err, prd) => {
        //res.send(prd)
        
        
 res.render('seller_account', { title: 'Express',prd:prd });
 // res.send(sess.i)
})
});
router.get('/ordet/:id', function(req, res, next) {
  var sess= req.session
  var oid =req.params.id
    
    let sql = `SELECT * FROM orders3 where or_id= ${oid} `;
    db.query(sql,  (err, ord) => {
        //res.send(prd)
var ord =ord[0].details
 ord=JSON.parse(ord)
       // ord=ord[0].details
 res.render('ordet', { title: 'Orders',ord:ord });
  //res.send(ord)
})
});

module.exports = router;
