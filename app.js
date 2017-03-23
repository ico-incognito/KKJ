var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http= require('http');
var request= require('request');

var index = require('./routes/index');
var regis = require('./routes/regis');
var comp = require('./routes/comp');
var about = require('./routes/about');
var faq = require('./routes/faq');
var gallery = require('./routes/gallery');
var timeline = require('./routes/timeline');
var intro = require('./routes/intro');
var home = require('./routes/home');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/regis', regis);
app.use('/comp', comp);
app.use('/about', about);
app.use('/faq', faq);
app.use('/gallery', gallery);
app.use('/timeline', timeline);
app.use('/intro', intro);
app.use('/home', home);



/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());



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
