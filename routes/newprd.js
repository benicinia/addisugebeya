var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db=require('../database');
var cons = require("../constants");
var path = require('path');
var session = require('ezsession');
var MySQLStore = require('ezsession')(session);
var hash = require('pbkdf2-password')()
var hasher = require('pbkdf2-password')()
var fs = require('fs');
var multer = require("multer");
router.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
    var id =req.params.id;
    let sql = `SELECT * FROM products25 WHERE product_id=${id}`;
    db.query(sql,  (err, prd) => {
        //res.send(prd)
  res.render('addnewprd', { title: 'Create vacancy' });
})
});

module.exports = router;
