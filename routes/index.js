var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
var db=require('../database');
var path = require('path');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var hash = require('pbkdf2-password')()
var hasher = require('pbkdf2-password')()
var fs = require('fs');
var multer = require("multer");
var DeviceDetector = require('node-device-detector');
var DeviceHelper = require('node-device-detector/helper');
router.use(express.json());
var options = {
  host            : 'localhost',
  user            : 'root',
  password        : '',
   port            :  3306,
  database        : 'gebeya'  //Database Name
};
var sessionStore = new MySQLStore(options);
router.use(session({
  key: 'session_cookie_name',
 secret: 'ssshhhhh',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
/* GET home page. */
router.get('/', function(req, res, next) {
  
  let usr = `SELECT * FROM products25`;
  db.query(usr,  (err, prds) => {
    if (err) throw err;
   // console.log(req.body);
   var d_pr = [(prds[0].disc)/100]*prds[0].price
   var pre_p=prds[0].price - (d_pr)
  res.render('nhome3', { title: 'Express',prds:prds,prp:pre_p })
  //res.send({pre_p})

});
 
});

module.exports = router;
