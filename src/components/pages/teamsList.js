'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {getTeams} from '../../actions/teamsActions.js';
import {bindActionCreators} from 'redux';
import TeamItem from './teamItem.js';
import {Link} from 'react-router-dom';



 class TeamsList extends React.Component{
    componentDidMount(){
      this.props.getTeams();
    }

render(){

  const teamsList= this.props.teams.map(function(teamsArr){
    return(
            <TeamItem
              _id={scoutsArr._id}
              name={scoutsArr.name}
              boss={scoutsArr.boss}
            />
    )
  })
  return(
    <div class='container col-sm-12 col-md-10 col-lg-10 scouts_container'>
      <div class='table_heading'>
          <h1>Lista załóg</h1>
          <Link to='/addTeam'><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Dodaj załogę</button></Link>
      </div>
      <div class='table-responsive'>
        <table class='table table-hover table-striped '>
          <thead>
            <tr>
      				<th>#</th>
      				<th>Nazwa załogi</th>
      				<th>Załogowy</th>
      				<th>Lista członków</th>
			      </tr>
		      </thead>
          <tbody>
            {teamsList}
          </tbody>
        </table>
      </div>
    </div>
  )
 }
}
function mapStateToProps(state){
  return{
    teams: state.teams.teams
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getTeams:getTeams
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
