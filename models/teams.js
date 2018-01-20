'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamsSchema = new Schema({
  name: String,
  boss:{type: Schema.Types.ObjectId, ref: 'User'}
});

var Teams = mongoose.model('Teams',teamsSchema );
module.exports = Teams;
