'use strict'
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//API

//=========>MONGO<=============
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/eHarcDB';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


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

//DELETE
app.delete('/scouts/:_id',function(req,res){
  var query = {_id:req.params._id};

  Scouts.remove(query,function(err,scouts){
    if(err){
      throw err;
    }
    res.json(scouts);
  })
});
//==============>TEAMS<=============
//POST
var Teams = require('./models/teams.js');
app.post('/teams', function(req, res){
  var team = req.body;
  Teams.create(team, function(err, teams){
    if(err){
      throw err;
    }
    res.json(teams);
  })
  console.log('no chyba działa');
});

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
  Teams.create(event, function(err, events){
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
//API END


app.listen(3001, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('API Sever is listening on http://localhost:3001');
});
