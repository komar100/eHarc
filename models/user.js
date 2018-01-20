'use strict'

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  boss: Boolean,
});

UserSchema.plugin(passportLocalMongoose);

var User= mongoose.model('User',UserSchema );
module.exports = User;
