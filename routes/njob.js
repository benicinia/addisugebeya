var app = require('express');
var router = app.Router();
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
//router.use(app.json());
router.get('/', function(req,res) {
  var sid =1
  let usr = `SELECT * FROM employer WHERE sid = ${sid}`;
  db.query(usr,  (err, prds) => {
    if (err) throw err;
    var cnm =prds[0].company
   res.render('njob',{cnm:cnm,sid:sid})
  })
})
/* GET home page. */
var destUrl=`public/images/uploads/`
const upload = multer({ dest: `${destUrl}` });
router.post('/',upload.array("image"),  function(req, res) {
    var sess=req.session
   var cnm =req.body.cnm
   var jtile=req.body.title
   var jsala=req.body.salary
   var jdescrp =req.body.description
   var jloc=req.body.location
   var jdeadl=req.body.deadline
   var qty=req.body.size
   var ski=req.body.skill
   var tbl = `jobs`
   
     
 if (req.files) {
   
 
 
 if (req.files[0].mimetype === 'image/png') {
   var mim ='png'
 } else if(req.files[0].mimetype === 'image/jpg') {
   var mim ='jpg'
 }else if(req.files[0].mimetype === 'image/jpeg') {
   var mim ='jpg'
 }
 if(req.files[0].mimetype === 'image/webp') {
   var mim ='webp'
 } if(req.files[0].mimetype !== ('image/webp'|'image/jpeg'|'image/jpg'|'image/png')) {
  
   var errm ='Unsupported image format'
 
 }
 //let usr = `SELECT * FROM customer WHERE completed=?`;
 if (errm) {
   //res.send(errm)
   res.render('product_main_page',{errm:errm})
  } 
 var x =req.files[0].filename
    var im=x+`.${mim}`
         let sql = `INSERT INTO ${tbl} (name, price, primg, mime, qty) VALUES (?, ?, ? ,? ,?);`;
       
     
         db.query(sql, [prnm,price,im,mim,qty], (err, rows) => {
        //   var d_pr = [(rows[0].disc)/100]*rows[0].price
    //var pre_p=rows[0].price - (d_pr)
             if (err) throw err;
            // console.log(req.body);
             console.log(req.files);
           //  console.log("Row inserted with id = "+rows[0].insertId); 
           fs.rename(`${destUrl}${x}`,`${destUrl}${x}.${mim}`, function (err) {
             if (err) throw err;
             console.log('File Renamed.');
             res.redirect('/product-edit')
           });
          //res.send(req.files)
         
         });
       } else {
         res.json({ message: "No file uploaded!" });
       }
 })
module.exports = router;
