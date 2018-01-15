'use strict'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import Reducers from './reducers/index';
import {postScouts, deleteScouts, updateScouts} from './actions/scoutsActions';
import ScoutsList from './components/pages/scoutsList';
import Login from './components/pages/login';
import Main from './components/main';



const Store = createStore(Reducers,applyMiddleware(thunk, logger));
console.log(Store.getState());
const prov = (
  <Provider store = { Store }>
    <Main />
  </Provider>
);

render(prov, document.getElementById("app"));
