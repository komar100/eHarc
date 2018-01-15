'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventsSchema = new Schema({
  name: String,
  start: { type: Date, default: Date.now },
  finish: { type: Date, default: Date.now },
  place: String,
  // teams: [{ type: Schema.Types.ObjectId, ref: 'teamSchema' }],
  // participants: [{ type: Schema.Types.ObjectId, ref: 'scoutsSchema' }],


});

var Events = mongoose.model('Events', eventsSchema);
module.exports = Events;
