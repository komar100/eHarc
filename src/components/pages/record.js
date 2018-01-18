'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {postScouts} from '../../actions/scoutsActions.js';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import teamsList from './teamsList';
import scoutsList from './scoutsList';
import mainForm from './mainForm';

class record extends React.Component {



  render() {
    return (
      <div class='container col-sm-12 col-md-10 col-lg-10 form_container'>

        <div class="row">
          <div class='col-sm-12 col-md-3 col-lg-3 form_menu'>
            <nav class="navbar navbar-inverse bg-inverse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to='/record/teamsList' class="nav-link" href="#">Lista załóg</Link>
                </li>
                <li class="nav-item">
                  <Link to='/record/scoutsList' class="nav-link" href="#">Lista osób</Link>
                </li>
              </ul>
            </nav>

          </div>
          <div class='col-sm-12 c   ol-md-9 col-lg-9  scout_form'>

        </div>
      </div>
    </div>
    )
  }
}



export default record;
