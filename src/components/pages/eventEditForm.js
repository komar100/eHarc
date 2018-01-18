'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {getEventsId} from '../../actions/eventsActions.js';
import {updateEvents} from '../../actions/eventsActions.js';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {
    withRouter
} from 'react-router-dom';

class EventEditForm extends React.Component {


  componentDidMount(){
    this.props.getEventsId(this.props.match.params._id);

  }
  submitForm (e) {
        e.preventDefault()
        this.props.history.push('/eventDetails/'+ this.props.match.params._id );
    }



  handleSubmit(){
    const event = [{
      _id: this.props.events._id,
      name: findDOMNode(this.refs.name).value,
      start: findDOMNode(this.refs.start).value,
      finish: findDOMNode(this.refs.finish).value,
      place: findDOMNode(this.refs.place).value,
    }]
    this.props.updateEvents(event, this.props.events._id)
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)} class='container col-sm-12 col-md-10 col-lg-10 form_container'>

              <div class="row form_name">
                <h2>Dane wydarzenia</h2>
              </div>
              <div class="form-group row">
                  <label for="name" class="col-2 col-form-label">Nazwa</label>
                  <div class="col-4">
                    <input class="form-control" type="text" ref="name" id="name" defaultValue={this.props.events.name} ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="start" class="col-2 col-form-label">Data rozpoczęcia</label>
                  <div class="col-4">
                    <input class="form-control" type="date" ref="start"  id="start" defaultValue={this.props.events.start}></input>
                  </div>
                </div>
            <div class="form-group row ">

                <label for="finish" class="col-2 col-form-label">Data zakończenia</label>
                <div class="col-4">
                  <input class="form-control" type="date" ref="finish"  id="finish" defaultValue={this.props.events.finish}></input>
                </div>
              </div>
              <div class="form-group row ">
                <label for="place" class="col-2 col-form-label">Miejsce</label>
                <div class="col-4">
                  <input class="form-control" type="text" ref="place"  id="place" defaultValue={this.props.events.place}></input>
                </div>
          </div>
            <button onClick={this.handleSubmit.bind(this)} type="submit" class="btn btn-primary">Zapisz</button>

        </form>
    )
  }
  }

function mapStateToProps(state,ownProps){

  return{
    events: state.events.events[0]

  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getEventsId: getEventsId,
    updateEvents: updateEvents
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventEditForm));
//export default mainForm;
