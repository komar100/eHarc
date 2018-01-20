'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Scouts = mongoose.Schema({
  name: String,
  surname: String,
  street: String,
  sNumber: Number,
  code: String,
  city: String,
  pesel: String,
  dateOfBirth: Date,
  telNumber: Number,
  parentTel: Number,
  mail: String,
  team: String
});

var Scouts= mongoose.model('Scouts',Scouts );
module.exports = Scouts;
