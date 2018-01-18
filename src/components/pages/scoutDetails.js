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

        <h3>{this.props.scouts.name}</h3>
        <h3>{this.props.scouts.surname}</h3>
        <h3>{this.props.scouts.street}</h3>
        <h3>{this.props.scouts.sNumber}</h3>
        <h3>{this.props.scouts.city}</h3>
        <h3>{this.props.scouts.telNumber}</h3>
        <h3>{this.props.scouts.parentTel}</h3>
        <h3>{this.props.scouts.pesel}</h3>
        <h3>{this.props.scouts.mail}</h3>
        <Link to={'/scoutEditForm/' + this.props.scouts._id}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Edytuj dane</button></Link>
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
