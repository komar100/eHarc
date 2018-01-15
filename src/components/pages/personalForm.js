'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {getScouts} from '../../actions/scoutsActions';
import {bindActionCreators} from 'redux';
import {Container, Col, Row,Table} from 'reactstrap';


 class personalForm extends React.Component{



render(){
  return(
    <div>
      <div class="row form_name">
        <h2>Dane osobowe</h2>
      </div>
      <div class="form-group row">
          <label for="name" class="col-2 col-form-label">Imię</label>
          <div class="col-4">
            <input class="form-control" type="text" ref="name" id="name"></input>
          </div>
          <label for="surname" class="col-2 col-form-label">Nazwisko</label>
          <div class="col-4">
            <input class="form-control" type="text" ref="surname" id="surname"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="pesel" class="col-2 col-form-label">Pesel</label>
          <div class="col-4">
            <input class="form-control" type="text" ref="pesel"  id="pesel"></input>
          </div>
        </div>
    <div class='row'>
          <h3>Adres zamieszkania</h3>
    </div>
    <div class="form-group row adress">

        <label for="street" class="col-2 col-form-label">Ulica</label>
        <div class="col-4">
          <input class="form-control" type="text" ref="street"  id="street"></input>
        </div>
        <label for="number" class="col-2 col-form-label">Numer domu</label>
        <div class="col-2">
          <input class="form-control" type="text" ref="number" id="number"></input>
        </div>
      </div>
      <div class="form-group row adress">
        <label for="code" class="col-2 col-form-label">Kod pocztowy</label>
        <div class="col-4">
          <input class="form-control" type="text" ref="code"  id="code"></input>
        </div>
        <label for="city" class="col-2 col-form-label">Miasto</label>
        <div class="col-4">
          <input class="form-control" type="text" ref="city"  id="city"></input>
        </div>
      </div>
      <div class='row'>
            <h3>Dane kontaktowe</h3>
      </div>
      <div class="form-group row ">

          <label for="tel" class="col-2 col-form-label">Telefon</label>
          <div class="col-4">
            <input class="form-control" type="text" ref="tel"  id="tel"></input>
          </div>
          <label for="parTel" class="col-2 col-form-label">Telefon rodzica</label>
          <div class="col-4">
            <input class="form-control" type="text"  ref="partel" id="parTel"></input>
          </div>
        </div>
        <div class="form-group row ">
          <label for="mail" class="col-2 col-form-label">E-mail</label>
          <div class="col-4">
            <input class="form-control" type="text"  ref="mail" id="mail"></input>
          </div>
        </div>
  </div>


  )
 }
}

export default personalForm;
