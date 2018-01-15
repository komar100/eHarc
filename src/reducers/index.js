"use strict"
import {combineReducers} from 'redux';

import {scoutsReducers} from './scoutsReducers';
import {eventsReducers} from './eventsReducers';
import {teamsReducers} from './teamsReducers';

export default combineReducers({
  scouts: scoutsReducers,
  events: eventsReducers,
  teams: teamsReducers
});
