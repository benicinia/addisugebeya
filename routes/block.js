var SHA256 = require('crypto-js/sha256');
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
  
//create a JavaScript class to represent a Block
class Block{
    constructor(index, timestamp, data, previousHash){
      this.index = index;
      this.timestamp = timestamp;
      this.data = data;
      this.previousHash = previousHash;
      this.hash = this.generateHash();
    }
  
    generateHash(){
      return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString()
    }
  }
  
  class Blockchain{
      constructor(){
          this.blockchain = [this.createGenesisBlock()];
      }
      createGenesisBlock(){
          return new Block(0, "11/04/2022", "first block on the chain", "0");
      }
      getTheLatestBlock(){
          return this.blockchain[this.blockchain.length - 1];
      }
      addNewBlock(newBlock){
          newBlock.previousHash = this.getTheLatestBlock().hash;
          newBlock.hash = newBlock.generateHash();
          this.blockchain.push(newBlock);
      }
  
      // testing the integrity of the chain
      validateChainIntegrity(){
          for(let i = 1; i<this.blockchain.length; i++){
              const currentBlock = this.blockchain[i];
              const previousBlock = this.blockchain[i-1];
              if(currentBlock.hash !== currentBlock.generateHash()){
                  return false;
              }
              if(currentBlock.previousHash !== previousBlock.hash){
                  return false;
              }
              return true;
  
          }
      }
  } 
  
  let logCoin = new Blockchain();
  console.log("mining logcoin in progress...");
  logCoin.addNewBlock(
      new Block(1, "06/04/2022", {
          sender: "Frank Joseph",
          recipient: "LogRocket",
          quantity: 25
      })
  );
  
  logCoin.addNewBlock(
      new Block(2, "08/08/2022", {
          sender: "Paul val",
          recipient: "Young A",
          quantity: 34
      })
  );
  
  logCoin.addNewBlock(
      new Block(3, "13/08/2022", {
          sender: "Elena",
          recipient: "Mary",
          quantity: 34
      })
  );
  console.log(JSON.stringify(logCoin, null, 5))
  
   // res.render('shopping_cart', { title: 'Express'});
})