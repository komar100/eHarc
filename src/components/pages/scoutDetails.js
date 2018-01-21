"use strict"
import React from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import {getScoutsId} from '../../actions/scoutsActions.js';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class ScoutDetails extends React.Component {

  componentDidMount(){
    this.props.getScoutsId(this.props.match.params._id);

  }



  render(){
    return(
      <div class='container col-sm-12 col-md-10 col-lg-10 scouts_container'>
          <div class='row'>
            <div class='col-md-5 col-sm-10'>
              <h3>Dane osobowe</h3>
              <p>Imię: {this.props.scouts.name}</p>
              <p>Nazwisko: {this.props.scouts.surname}</p>
              <p>Pesel: {this.props.scouts.pesel}</p>
              <p>Data urodzenia: {this.props.scouts.dateOfBirth}</p>
            </div>
        <div class='col-md-5 col-sm-10'>
            <h3>Adres zamieszkania</h3>
            <p>Ul. {this.props.scouts.street} {this.props.scouts.sNumber}</p>
            <p>{this.props.scouts.code} {this.props.scouts.city}</p>
          </div>
        </div>
        <h3>Dane kontaktowe</h3>
        <p>Telefon: {this.props.scouts.telNumber}</p>
        <p>Telefon rodzica: {this.props.scouts.parentTel}</p>
        <p>E-mail: {this.props.scouts.mail}</p>

        <Link to={'/scoutEditForm/' + this.props.scouts._id}><button class="btn btn-primary my-2 my-sm-0" type="submit">Edytuj dane</button></Link>
      </div>
    )
  };
};
function mapStateToProps(state,ownProps){

  return{
    scouts: state.scouts.scouts[0]

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getScoutsId:getScoutsId
  }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(ScoutDetails);
