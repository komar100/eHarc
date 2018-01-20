'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {getScouts} from '../../actions/scoutsActions.js';
import {bindActionCreators} from 'redux';
import ScoutEventItem from './scoutEventItem.js';
import {Link} from 'react-router-dom';



 class EventScouts extends React.Component{
    componentDidMount(){
      this.props.getScouts();
    }

render(){
  const event= this.props.eventId
  const scoutsList= this.props.scouts.map(function(scoutsArr){
    return(
      <ScoutEventItem
        eventId= {event}
        _id={scoutsArr._id}
        name={scoutsArr.name}
        surname={scoutsArr.surname}
        team={scoutsArr.team}
      />
    )
  })
  return(
    <div class='container  scouts_container'>
      <div class='table_heading'>
          <h1>Lista członków</h1>
        </div>
      <div class='table-responsive'>
        <table class='table table-hover table-striped '>
          <thead>
            <tr>
      				<th>#</th>
      				<th>Imię</th>
      				<th>Nazwisko</th>
      				<th>Załoga</th>
      				<th>Dodaj</th>
			      </tr>
		      </thead>
          <tbody>
            {scoutsList}
          </tbody>
        </table>
      </div>
    </div>
  )
 }
}
function mapStateToProps(state){
  return{
    scouts: state.scouts.scouts
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getScouts:getScouts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScouts);
