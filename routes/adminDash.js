var express = require('express')
var app = module.exports=express()
var router = express.Router();
const session = require('express-session');
var db= require('../database')
const mysql = require('mysql2/promise');
var hash = require('pbkdf2-password')()
var hasher = require('pbkdf2-password')()
var ezp = require('../constants')
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
  var sess = req.session;
  if (sess.isadmin) {
    res.render('dasha', { title: 'Dashboard' });
  }
 
});

router.post('/', function(req, res, next) {
 
  var sess = req.session;
  
  //sess.isvalid = false;
  const ip = req.socket.remoteAddress;
  const remoteAddresParams = ip.split(':');
  const clientIP = remoteAddresParams[remoteAddresParams.length -1];
  //var isClientBlocked= blackList.any(ip => ip.toString() === clientIP.toString());
    var map=req.body;
    var email = map.email;
    var pass = map.password;
    
    var surl=ezp.surl;
     
    var blackList =
  
    [
  // '127.0.0.1', 
    '88.77.99.1',] 
  ;
    var phg;
    var cid;
    var bod;
    //ar result = blackList.filter(ip === clientIP);
    
  //let result = true;
  
  let result = true;
  for (let i = 0; i < blackList.length; i++) {
      if (blackList[i] === clientIP) {
          result = false;
          break;
      }
  }
    //var count = result[0] ? result[0]['COUNT(ip)'] : 0;
   var sql=db.query('SELECT * FROM admin WHERE unme = ?', [email], function (err, data, fields) {
    if (result == true){
      //res.end();
    if(!err==true){
      try { 
        console.log(sql);
        cid =data[0].aid;
         var passw =data[0].pwd;
        
         
         bod = {
           pwd: pass,
           passw: passw 
         };
         hash({ password: bod.pwd, salt:'Godisgreat' }, function (err, pass, salt, hash) {
          bod.pwd.salt = salt;
          bod.pwd.hash = hash;
         
          if (hash === passw ) {
      sess.isAdmin = true;
      sess.ssid = req.session.id;
      var anm=data[0].fname
    //  req.session.bnk = cons.bnk;
      //sessionStore.close();
        
      sess.Alogid = JSON.parse(cid);
      sess.email = email;
      
      
    
          
          
          
            
              
        //  if (err) throw err;
      
         //res.send(cid);
      
         //
       
       
      
     
      
     // res.send(data)
      res.render('dasha',{data:data,anm:anm})
          
      
      
      
          //res.json(sess.id);
          } else { 
            
            //sessionStore.close();
             
            res.redirect('/');  
      
          }
        })
        
        }catch   (err) {res.redirect('dasha');}
      } else{res.send('server error');}
   
    
        //res.send(cid);
      } else {
        res.send('count');
      }
   });
  
  });

module.exports = router;
