'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {getEvents} from '../../actions/eventsActions';
import {bindActionCreators} from 'redux';
import {Container, Col, Row,Table} from 'reactstrap';
import EventItem from './eventItem.js';
import {Link} from 'react-router-dom';


class EventsList extends React.Component{
    componentDidMount(){
      this.props.getEvents()
    }

render(){

  const eventsList= this.props.events.map(function(eventsArr){
    return(
            <EventItem
              _id={eventsArr._id}
              name={eventsArr.name}
              start={eventsArr.start}
              finish={eventsArr.finish}
              place={eventsArr.place}
              />
    )
  })
  return(
    <div class='container col-sm-12 col-md-10 col-lg-10 events_container'>
      <div class='table_heading'>
          <h1>Wydarzenia</h1>
          <Link to='/addEvent' class='przycisk'><button class="btn btn-primary my-2 my-sm-0" type="submit">Dodaj wydarzenie</button></Link>
      </div>
      <div class='table-responsive'>
        <table class='table table-hover table-striped '>
          <thead>
            <tr>
      				<th>#</th>
      				<th>Nazwa</th>
      				<th>Data rozpoczęcia</th>
      				<th>Data zakończenia</th>
              <th>Miejsce</th>
      				<th>Szczegóły</th>
              <th>Usuń</th>
			      </tr>
		      </thead>
          <tbody>
            {eventsList}
          </tbody>
        </table>
      </div>
    </div>
  )
 }
}
function mapStateToProps(state){
  return{
    events: state.events.events
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getEvents:getEvents
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
