var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-hbs');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var session = require('express-session');
var multer = require("multer");
var Telebirr = require('telebirrjs')

var nodemon=require('nodemon');


const MySQLStore = require('express-mysql-session')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signinRouter = require('./routes/signin');
var cartRouter = require('./routes/cart');
var registerRouter = require('./routes/register');
var signupRouter = require('./routes/signup');
var adminRouter = require('./routes/admin');
var admindRouter = require('./routes/adminDash');
var editpRouter = require('./routes/product-edit');
var adpRouter = require('./routes/newprd');
var subpRouter = require('./routes/process');
var sellerRouter = require('./routes/sellerDash');
var prRouter = require('./routes/product');
var jRouter = require('./routes/job');
var cRouter = require('./routes/ncomp');
var njRouter = require('./routes/njob');
var orRouter = require('./routes/orders');
var invRouter = require('./routes/inventory');
var pRouter = require('./routes/profile');
var chkRouter = require('./routes/chk');
var blockRouter =require('./routes/block')
//var urlencodedparser = bodyparser.urlencoded({  extended: false});

var port = process.env.PORT || 3001
var cors =require('cors')
var app = module.exports = express();
var mysql      = require('mysql');

const options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'gebeya'
};
var connection = mysql.createConnection(options); // or mysql.createPool(options);
var sessionStore = new MySQLStore({}/* session store options */, connection);
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.express4({
  partialsDir: [ __dirname +('views/partials'),  __dirname +('views/partials-other')],
  defaultLayout:  __dirname +('views/layout/default.hbs')
}));
/*app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));*/


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('partialsDir', __dirname + '/views/partials');
// Serve static resources
app.engine('public', hbs.express4({
  partialsDir: __dirname + '/public'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use('/chk', chkRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signin', signinRouter);
app.use('/cart', cartRouter);
app.use('/register', registerRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminRouter);
app.use('/adminDash', admindRouter);
app.use('/product-edit', editpRouter);
app.use('/newprd', adpRouter);
app.use('/process', subpRouter);
app.use('/sellerDash', sellerRouter);
app.use('/product', prRouter);
app.use('/job', jRouter);
app.use('/ncomp', cRouter);
app.use('/njob', njRouter);
app.use('/orders', orRouter);
app.use('/inventory', invRouter);
app.use('/profile', pRouter);
app.use('/block',blockRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

 

app.listen(port, () => console.log(`Listening on port ${port}`))
module.exports = app;
