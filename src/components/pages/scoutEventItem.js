"use strict"
import React from 'react';
import { Button} from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getEventsId} from '../../actions/eventsActions.js';
import {addToEvent} from '../../actions/eventsActions.js';
import {bindActionCreators} from 'redux';
class ScoutEventItem extends React.Component {

  componentDidMount(){
    this.props.getEventsId(this.props.eventId);

  }


  handleSubmit(){
    this.props.addToEvent(this.props._id,this.props.eventId, this.props.events[0]);

  }
  render(){
    return(
      <tr>
        <td></td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.team}</td>
        <td><input onClick={this.handleSubmit.bind(this)} type='button' id='dodaj'  value='Dodaj'></input></td>

      </tr>
    )
  }
}
function mapStateToProps(state){
  return{
    events: state.events.events
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToEvent:addToEvent,
    getEventsId: getEventsId
  }, dispatch)
}
export default  connect(mapStateToProps, mapDispatchToProps)(ScoutEventItem);
