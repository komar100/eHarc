'use strict'

var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
  email: String,
  password: String,
  boss: Boolean,
  teamBoss: Boolean,

});

var Users= mongoose.model('Users',usersSchema );
module.exports = Users;
