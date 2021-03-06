'use strict'
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
const fileUpload = require('express-fileupload');



var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//API

// //=========>MONGO<=============
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/eHarcDB';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.use(express.static(path.join(__dirname, 'public')));


//FILE UPLOAD
app.use(fileUpload());

app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  let file = req.files.file;

  file.mv('./public/plan.jpg', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});



//============>SCOUTS<===========
//POST
var Scouts = require('./models/scouts.js');
app.post('/scouts', function(req, res){
  var scout = req.body;
  Scouts.create(scout, function(err, scouts){
    if(err){
      throw err;
    }
    res.json(scouts);
  })
  console.log('no chyba działa');
});

//GET
app.get('/scouts', function(req,res){

  Scouts.find(function(err, scouts){
    if(err){
      throw err;
    }
    res.json(scouts)
  })
  console.log('get działa');
});

//GET ID
app.get('/scouts/:_id', function(req,res){
  var query= {_id:req.params._id}
  Scouts.find(query, function(err, scouts){
    if(err){
      throw err;
    }
    res.json(scouts)
  })
  console.log('get działa');
});



//DELETE
app.delete('/scouts/:_id',function(req,res){
  var query1 = {_id:req.params._id};

  Scouts.remove(query1,function(err,scouts){
    if(err){
      throw err;
    }
    res.json(scouts);
  })
});
//UPDATE
app.put('/scouts/:_id', function(req, res) {
  var scout = req.body[0];
  var query = req.params._id;


  Scouts.findOneAndUpdate(query, { $set: scout},{ overwrite: true }, function(err,scouts){
    if(err){
      throw err;
    }
    res.json(scouts);
  })
});
//==============>TEAMS<=============

//GET
app.get('/teams', function(req,res){

  Teams.find(function(err, teams){
    if(err){
      throw err;
    }
    res.json(teams)
  })
  console.log('get działa');
});

//==============>EVENTS<=============
//POST

var Events = require('./models/events.js');
app.post('/events', function(req, res){
  var event = req.body;
  Events.create(event, function(err, events){
    if(err){
      throw err;
    }
    res.json(events);
  })
  console.log('no chyba działa');
});

//GET
app.get('/events', function(req,res){

  Events.find(function(err, events){
    if(err){
      throw err;
    }
    res.json(events)
  })
  console.log('get działa');
});

//GET ID
app.get('/events/:_id', function(req,res){
  var query= {_id:req.params._id}
  Events.find(query, function(err, events){
    if(err){
      throw err;
    }
    res.json(events)
  })
  console.log('get działa');
});

//DELETE
app.delete('/events/:_id',function(req,res){
  var query = {_id:req.params._id};

  Events.remove(query,function(err,events){
    if(err){
      throw err;
    }
    res.json(events);
  })
});

//UPDATE
app.put('/events/:_id', function(req, res) {
  var event = req.body[0];
  var query = req.params._id;


  Events.findByIdAndUpdate(query, { $set: event}, {new: true}, function(err,events){
    if(err){
      throw err;
    }
    res.json(events);
  })
});

app.put('/eventsAdd/:_id', function(req, res) {
  var event = req.body;
  var query = req.body._id;

  var update={
    '$set': {
      participants: [...event.participants, req.params._id]
    }
  }
  console.log(query,event)
  Events.findByIdAndUpdate(query, update, {new: true}, function(err,events){
    if(err){
      throw err;
    }
    res.json(events);
  })
res.json(event);
});

app.put('/eventsDel/:_id', function(req, res) {
  var event = req.body;
  var query = req.body._id
  var i = event[0].participants.findIndex(req.body._id)

  var update={
    '$set': {
      participants: event[0].participants.slice(i, 1)
    }
  }
  console.log(query,event)
  Events.findByIdAndUpdate(query, update, {new: true}, function(err,events){
    if(err){
      throw err;
    }
    res.json(events);
  })
res.json(event);
});
//API END


app.listen(3001, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('API Sever is listening on http://localhost:3001');
});
