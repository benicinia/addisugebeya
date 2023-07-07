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
var cors =  require('cors')
var app = express()
app.use(express.json());

/* GET users listing. */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//router.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:19000',
  optionsSuccessStatus: 200 //7some legacy browsers (IE11, various SmartTVs) choke on 204
}
router.get('/', cors(corsOptions), function(req, res) {
let sql = `SELECT * FROM employer`;
db.query(sql,  (err, prd) => {
    //res.send(prd)
    
res.json(prd);
})})
router.get('/job:id', cors(corsOptions), function(req, res) {
  var id=req.params.id
  let sql = `SELECT * FROM employer WHERE c_id=${id}`;
  db.query(sql,  (err, prd) => {
      //res.send(prd)
      
  res.json(prd);
  })})
var destUrl=`public/images/uploads/`
const upload = multer({ dest: `${destUrl}` });
router.post('/jobz',  function(req, res) {
  var sess=req.session
  var prnm =req.body.prnm
  var price=req.body.price
  var qty=req.body.qty
  var tbl = `products${'25'}`
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
     var x = req.files[0].filename
   var im=x+`.${mim}`
        let sql = `UPDATE +${tbl} SET owner = "Ronald",species = "cat",age = 1  WHERE id = 5`;
      
    
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

router.post('/t',upload.array("image"),  function(req, res) {
   var sess=req.session
  var prnm =req.body.prnm
  var price=req.body.price
  var qty=req.body.qty
  var tbl = `products${'25'}`
  
    
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
module.exports=router;