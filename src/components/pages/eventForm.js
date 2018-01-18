'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {postEvents} from '../../actions/eventsActions.js';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {
    withRouter
} from 'react-router-dom';

class eventForm extends React.Component {

  submitForm (e) {
        e.preventDefault()
        this.props.history.push('/eventsList');
    }

  handleSubmit(){
    const event = [{
      name: findDOMNode(this.refs.name).value,
      start: findDOMNode(this.refs.start).value,
      finish: findDOMNode(this.refs.finish).value,
      place: findDOMNode(this.refs.place).value,
    }]
    this.props.postEvents(event)
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
                    <input class="form-control" type="text" ref="name" id="name"></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="start" class="col-2 col-form-label">Data rozpoczęcia</label>
                  <div class="col-4">
                    <input class="form-control" type="date" ref="start"  id="start"></input>
                  </div>
                </div>
            <div class="form-group row ">

                <label for="finish" class="col-2 col-form-label">Data zakończenia</label>
                <div class="col-4">
                  <input class="form-control" type="date" ref="finish"  id="finish"></input>
                </div>
              </div>
              <div class="form-group row ">
                <label for="place" class="col-2 col-form-label">Miejsce</label>
                <div class="col-4">
                  <input class="form-control" type="text" ref="place"  id="place"></input>
                </div>
          </div>
            <button onClick={this.handleSubmit.bind(this)} type="submit" class="btn btn-primary">Zapisz</button>

        </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postEvents
  }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(eventForm));
//export default mainForm;
