var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var bodyparser = require('body-parser');
const Mysqli = require('mysqli');
var app = express();


var mysql      = require('mysql');

var pool  = new mysql.createPool({
  connectionLimit : 10,
 host            : 'Localhost',
  user            : 'root',
  password        : '',
  database        : 'gebeya'
});





pool.getConnection(function(err, connection) {
  //if (err) throw err; // not connected!
  if(!err==true){
  try {console.log('Connected to Ezana core banking!');
  pool.on('release', function (connection) {
    console.log('Connection %d released', connection.threadId);
  });
}
  catch (err) {console.log('not connected!');}}
   
});




module.exports = pool;
