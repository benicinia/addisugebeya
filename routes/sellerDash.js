var express = require('express')
var app = module.exports=express()
var router = express.Router();
const session = require('express-session');
var db= require('../database')
const mysql = require('mysql2/promise');
var hash = require('pbkdf2-password')()
var hasher = require('pbkdf2-password')()
var ezp = require('../constants');
var datex = require('date-and-time');
var SHA256 = require('crypto-js/sha256');
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
  if (sess.isvalid) {
    res.render('seller_dash', { title: 'Dashboard' });
  }
 
});
router.post('/buyer', function(req, res) {
  var sess = req.session;
  var bod=req.body
    var ccount=bod.ccount
    var pra=[];
    //var vid = bod.vid;
    var tbl = `orders${'3'}`;
    var oramt = bod.tamt;
    
    for (let i = 0; i < ccount; i++) {
      pra.push({name:`${bod['name-'+i]}`,
                price:`${bod['price-'+i]}`,
                count:`${bod['count-'+i]}`
              })
            }
            var praa = JSON.stringify(pra)
            if (pra.length > 0) {
              let sql = `INSERT INTO ${tbl} (or_date,details, noit, oramt) VALUES (?,?, ?, ? );`;
              const now = new Date();
              //datex.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
              datex.format(now, 'ddd, MMM DD YYYY');       // => 'Fri, Jan 02 2015'
              //date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 PM GMT-0800'
              //date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 AM GMT+0000'
              
              const pattern = datex.compile('ddd, MMM DD YYYY');
              var datet =datex.format(now, pattern);                  // => 'Fri, Jan 02 2015'
              db.query(sql, [datet,praa,ccount,oramt], (err, rows) => {
                res.render('your_orders', { title: 'Dashboard' });
                //res.send(datet)
              })
           
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
   var sql=db.query('SELECT * FROM customer WHERE email = ?', [email], function (err, data, fields) {
    if (result == true){
      //res.end();
    if(!err==true){
      try { 
        console.log(sql);
        cid =data[0].cust_id;
         var passw =data[0].pwd;
        
         
         bod = {
           pwd: pass,
           passw: passw 
         };
         hash({ password: bod.pwd, salt:'Godisgreat' }, function (err, pass, salt, hash) {
          bod.pwd.salt = salt;
          bod.pwd.hash = hash;
         
          if (hash === passw ) {
      sess.isvalid = true;
      sess.ssid = req.session.id;
    //  req.session.bnk = cons.bnk;
      //sessionStore.close();
        
      sess.logid = JSON.parse(cid);
      sess.email = email;
      
      
    
          
          
          
            
              
        //  if (err) throw err;
      
         //res.send(cid);
      
         //
       
       
      
     
      
      
      res.render('seller_dash')
          
      
      
      
          //res.json(sess.id);
          } else { 
            
            //sessionStore.close();
             
            res.redirect('/');  
      
          }
        })
        
        }catch   (err) {res.redirect('index');}
      } else{res.send('server error');}
   
    
        //res.send(cid);
      } else {
        res.send('count');
      }
   });
  
  });
  router.get('/block', function(req, res, next) {
  
   
class CryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

class CryptoBlockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 4;
  }
  startGenesisBlock() {
    return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    //newBlock.hash = newBlock.computeHash();
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.precedingHash !== precedingBlock.hash) return false;
    }
    return true;
  }
}

let EZC = new CryptoBlockchain();

console.log("EZC mining in progress....");
smashingCoin.addNewBlock(
  new CryptoBlock(1, "01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
  })
);

EZC.addNewBlock(
  new CryptoBlock(2, "01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
  })
);

console.log(JSON.stringify(EZC, null, 4));

      
       // res.render('shopping_cart', { title: 'Express'});
    })
module.exports = router;
