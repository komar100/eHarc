'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Scouts = mongoose.Schema({
  name: String,
  surname: String,
 //  address: {
 //   street: String,
 //   sNumber: Number,
 //   code: String,
 //   city: String
 // },
 //   pesel: String,
 //   dateOfBirth: Date,
 //   telNumber: Number,
 //   parentTel: Number,
 //   mail: String,
 //   team: { type: Schema.Types.ObjectId, ref: 'teamSchema' },
 //   degree: String,

});

var Scouts= mongoose.model('Scouts',Scouts );
module.exports = Scouts;
