'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {getScouts} from '../../actions/scoutsActions.js';
import {bindActionCreators} from 'redux';
import ScoutItem from './scoutItem.js';
import {Link} from 'react-router-dom';



 class ScoutsList extends React.Component{
    componentDidMount(){
      this.props.getScouts();
    }

render(){

  const scoutsList= this.props.scouts.map(function(scoutsArr){
    return(
            <ScoutItem
              _id={scoutsArr._id}
              name={scoutsArr.name}
              surname={scoutsArr.surname}
              team={scoutsArr.team}
            />
    )
  })
  return(
    <div class='container col-sm-12 col-md-10 col-lg-10 scouts_container'>
      <div class='table_heading'>
          <h1>Lista członków</h1>
          <Link to='/addScout'><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Dodaj członka</button></Link>
      </div>
      <div class='table-responsive'>
        <table class='table table-hover table-striped '>
          <thead>
            <tr>
      				<th>#</th>
      				<th>Imię</th>
      				<th>Nazwisko</th>
      				<th>Załoga</th>
      				<th>Szczegóły</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScoutsList);
