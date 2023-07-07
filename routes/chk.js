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
    res.render('shopping_cart', { title: 'Express'});
})
router.get('/id', function(req, res, next) {
  var sess= req.session
    var id =req.params.id;
    sess.i=id
    let sql = `SELECT * FROM products25 WHERE product_id=${id}`;
    db.query(sql,  (err, prd) => {
        //res.send(prd)
        var rt=prd[0].rating
        var tr=5 - rt
        const rtr =[]
        const trt =[]
        for (let index = 0; index < rt; index++) {
         rtr.push(1)
          
        }
        for (let index = 0; index < tr; index++) {
          trt.push(1)
           
         }
        if (prd[0].rating===5) {
 var rtx='rt5'
        }else if (rt=== 4.5) {
          var rtx='rt45'
        } 
        else if (rt===4) {
          var rtx='rt4'
          
        }else if (rt===3.5) {
          var rtx='rt35'
        } 
        else if (prd[0].rating===3) {
          var rtx=3
        } else if (rt===2.5) {
          var rtx='rt25'
        }  
        
        else if (rt===2) {
          var rtx='rt2'
        }else if (rt===1.5) {
          var rtx='rt15'
        } 
        
        else if (rt===1) {
          var rtx='rt1'
        }
 res.render('product_main', { title: 'Express',prd:prd[0],rtr:rtr,trt:trt });
 // res.send(sess.i)
})
});

module.exports = router;
