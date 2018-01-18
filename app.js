var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var app = express();

//PROXY
var httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer({
  target:"http://localhost:3001"
});
app.use('/api', function(req, res){
  apiProxy.web(req, res);
})
// END PROXY
//=========>MONGO<=============
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/eHarcDB';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//==========>SESSION<==============
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

require('./config/passport')(passport);
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

require('./routes/index.js')(app, passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'public',
'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
