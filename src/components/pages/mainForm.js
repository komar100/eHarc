'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {postScouts} from '../../actions/scoutsActions.js';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {
    withRouter
} from 'react-router-dom';

class mainForm extends React.Component {

  submitForm (e) {
        e.preventDefault()
        this.props.history.push('/scoutsList');
    }

  handleSubmit(){
    const scout = [{
      name: findDOMNode(this.refs.name).value,
      surname: findDOMNode(this.refs.surname).value,
      street: findDOMNode(this.refs.street).value,
      sNumber:findDOMNode(this.refs.number).value,
      code: findDOMNode(this.refs.code).value,
      city: findDOMNode(this.refs.city).value,
      pesel: findDOMNode(this.refs.pesel).value,
      dateOfBirth: findDOMNode(this.refs.dateOfBirth).value,
      telNumber: findDOMNode(this.refs.tel).value,
      parentTel: findDOMNode(this.refs.partel).value,
      mail: findDOMNode(this.refs.mail).value,
      team: findDOMNode(this.refs.team).value,

    }]
    this.props.postScouts(scout)
  }

  render() {
    return (
      <div class='container col-sm-12 col-md-10 col-lg-10 form_container'>

        <div class="row">

          <form onSubmit={this.submitForm.bind(this)} class='col-sm-12 col-md-12 col-lg-12 '>
            <div>
              <div class="row form_name">
                <h2>Dane osobowe</h2>
              </div>
              <div class="form-group row">
                  <label for="name" class="col-md-2 col-sm-10 col-form-label">Imię</label>
                  <div class="col-md-4 col-sm-10">
                    <input class="form-control" type="text" ref="name" id="name"></input>
                  </div>
                  <label for="surname" class="col-md-2 col-sm-10 col-form-label">Nazwisko</label>
                  <div class="col-md-4 col-ms-10">
                    <input class="form-control" type="text" ref="surname" id="surname"></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="pesel" class="col-md-2 col-sm-10 col-form-label">Pesel</label>
                  <div class="col-md-4 col-sm-10">
                    <input class="form-control" type="number" ref="pesel"  id="pesel"></input>
                  </div>
                  <label for="dateOfBirth" class="col-md-2 col-sm-10 col-form-label">Data urodzenia</label>
                  <div class="col-md-3 col-sm-10">
                    <input class="form-control" type="date" ref="dateOfBirth"  id="dateOfBirth"></input>
                  </div>
                </div>
            <div class='row'>
                  <h3>Adres zamieszkania</h3>
            </div>
            <div class="form-group row adress">

                <label for="street" class="col-md-2 col-sm-10 col-form-label">Ulica</label>
                <div class="col-md-4 col-sm-10">
                  <input class="form-control" type="text" ref="street"  id="street"></input>
                </div>
                <label for="number" class="col-md-2 col-sm-10 col-form-label">Numer domu</label>
                <div class="col-md-4 col-sm-10">
                  <input class="form-control" type="number" ref="number" id="number"></input>
                </div>
              </div>
              <div class="form-group row adress">
                <label for="code" class="col-md-2 col-sm-10 col-form-label">Kod pocztowy</label>
                <div class="col-md-4 col-sm-10">
                  <input class="form-control" type="text" ref="code"  id="code"></input>
                </div>
                <label for="city" class="col-md-2 col-sm-10 col-form-label">Miasto</label>
                <div class="col-md-4 col-sm-10">
                  <input class="form-control" type="text" ref="city"  id="city"></input>
                </div>
              </div>
              <div class='row'>
                    <h3>Dane kontaktowe</h3>
              </div>
              <div class="form-group row ">

                  <label for="tel" class="col-md-2 col-sm-10 col-form-label">Telefon</label>
                  <div class="col-md-4 col-sm-10">
                    <input class="form-control" type="tel" ref="tel"  id="tel"></input>
                  </div>
                  <label for="parTel" class="col-md-2 col-sm-10 col-form-label">Telefon rodzica</label>
                  <div class="col-md-4 col-sm-10">
                    <input class="form-control" type="tel"  ref="partel" id="parTel"></input>
                  </div>
                </div>
                <div class="form-group row ">
                  <label for="mail" class="col-md-2 col-sm-10 col-form-label">E-mail</label>
                  <div class="col-md-4 col-sm-10">
                    <input class="form-control" type="email"  ref="mail" id="mail"></input>
                  </div>
                  <label for="team" class="col-md-2 col-sm-10 col-form-label">Załoga</label>
                  <div class="col-md-4 col-sm-10">
                    <select class="form-control" id="team" ref="team" >
                      <option>Zuchy</option>
                      <option>Jungi</option>
                      <option>Harcerze starsi</option>
                      <option>Wędrownicy</option>
                    </select>
                  </div>
                </div>
          </div>
            <button  onClick={this.handleSubmit.bind(this)} type="submit" class=" zapisz btn btn-primary">Zapisz</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postScouts
  }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(mainForm));
//export default mainForm;
