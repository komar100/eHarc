'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {getScoutsId} from '../../actions/scoutsActions.js';
import {updateScouts} from '../../actions/scoutsActions.js';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {  BrowserRouter as Router, Redirect } from 'react-router'
import {
    withRouter
} from 'react-router-dom';

class ScoutEditForm extends React.Component {


  componentDidMount(){
    this.props.getScoutsId(this.props.match.params._id);
    console.log(this.props)

  }
  submitForm (e) {
        e.preventDefault()
        this.props.history.push('/scoutDetails/'+ this.props.match.params._id );
    }



  handleSubmit(){
    const scout = [{
      _id: this.props.scouts._id,
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

    }]
    this.props.updateScouts(scout, this.props.scouts._id);
  }


  render() {

    return (
      <div class='container col-sm-12 col-md-10 col-lg-10 form_container'>

        <div class="row">

          <form onSubmit={this.submitForm.bind(this)} class='col-sm-12 col-md-12 col-lg-12  scout_form'>
            <div>
              <div class="row form_name">
                <h2>Dane osobowe</h2>
              </div>
              <div class="form-group row">
                  <label for="name" class="col-md-2 col-sm-10 col-form-label">Imię</label>
                  <div class="col-md-4 col-ms-10">
                    <input class="form-control" type="text" ref="name" id="name" defaultValue={this.props.scouts.name}></input>
                  </div>
                  <label for="surname" class="col-md-2 col-sm-10 col-form-label" >Nazwisko</label>
                  <div class="col-md-4 col-ms-10">
                    <input class="form-control" type="text" ref="surname" id="surname" defaultValue={this.props.scouts.surname}></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="pesel" class="col-md-2 col-sm-10 col-form-label">Pesel</label>
                  <div class="col-md-4 col-ms-10">
                    <input class="form-control" type="number" ref="pesel"  id="pesel" defaultValue={this.props.scouts.pesel}></input>
                  </div>
                  <label for="dateOfBirth" class="col-2 col-sm-10 col-form-label">Data urodzenia</label>
                  <div class="col-md-3 col-ms-10">
                    <input class="form-control" type="date" ref="dateOfBirth"  id="dateOfBirth" defaultValue={this.props.scouts.dateOfBirth}></input>
                  </div>
                </div>
            <div class='row'>
                  <h3>Adres zamieszkania</h3>
            </div>
            <div class="form-group row adress">

                <label for="street" class="col-md-2 col-sm-10 col-form-label">Ulica</label>
                <div class="col-md-4 col-ms-10">
                  <input class="form-control" type="text" ref="street"  id="street" defaultValue={this.props.scouts.street}></input>
                </div>
                <label for="number" class="col-md-2 col-sm-10 col-form-label">Numer domu</label>
                <div class="col-md-4 col-ms-10">
                  <input class="form-control" type="number" ref="number" id="number" defaultValue={this.props.scouts.sNumber}></input>
                </div>
              </div>
              <div class="form-group row adress">
                <label for="code" class="col-md-2 col-sm-102 col-form-label">Kod pocztowy</label>
                <div class="col-md-4 col-ms-10">
                  <input class="form-control" type="text" ref="code"  id="code" defaultValue={this.props.scouts.code}></input>
                </div>
                <label for="city" class="col-md-2 col-sm-10 col-form-label">Miasto</label>
                <div class="col-md-4 col-ms-10">
                  <input class="form-control" type="text" ref="city"  id="city" defaultValue={this.props.scouts.city}></input>
                </div>
              </div>
              <div class='row'>
                    <h3>Dane kontaktowe</h3>
              </div>
              <div class="form-group row ">

                  <label for="tel" class="col-md-2 col-sm-10 col-form-label">Telefon</label>
                  <div class="col-md-4 col-ms-10">
                    <input class="form-control" type="tel" ref="tel"  id="tel" defaultValue={this.props.scouts.telNumber}></input>
                  </div>
                  <label for="parTel" class="col-md-2 col-sm-102 col-form-label">Telefon rodzica</label>
                  <div class="col-md-4 col-ms-10">
                    <input class="form-control" type="tel"  ref="partel" id="parTel" defaultValue={this.props.scouts.parentTel}></input>
                  </div>
                </div>
                <div class="form-group row ">
                  <label for="mail" class="col-md-2 col-sm-10 col-form-label">E-mail</label>
                  <div class="col-md-4 col-ms-10">
                    <input class="form-control" type="email"  ref="mail" id="mail" defaultValue={this.props.scouts.mail}></input>
                  </div>
                  <label for="team" class="col-md-2 col-sm-10 col-form-label">Załoga</label>
                  <div class="col-md-4 col-ms-10">
                    <select class="form-control" id="team" ref="team" >
                      <option>Zuchy</option>
                      <option>Jungi</option>
                      <option>Harcerze starsi</option>
                      <option>Wędrownicy</option>
                    </select>
                  </div>
                </div>
          </div>
            <button onClick={this.handleSubmit.bind(this)} type="submit" class=" zapisz btn btn-primary">Zapisz</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return{
    scouts: state.scouts.scouts[0]
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getScoutsId:getScoutsId,
    updateScouts
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScoutEditForm));
//export default mainForm;
