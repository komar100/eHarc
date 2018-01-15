"use strict"
import axios from 'axios';

// GET
export function getTeams(){
  return function(dispatch){
    axios.get("/api/teams")
      .then(function(response){
        dispatch({type:"GET_TEAMS", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"GET_TEAMS_REJECTED", payload: err.message})
      })
  }
}
// POST
export function postTeams(team){
  return function(dispatch){
    axios.post("/api/teams", team)
      .then(function(response){
        dispatch({type:"POST_TEAMS", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_SCOUT_REJECTED", payload: err.message})
      })
  }
}

// DELETE
export function deleteTeams(id){
  return function(dispatch){
    axios.delete("/api/teams/" + id)
      .then(function(response){
        dispatch({type:"DELETE_TEAM", payload:id})
      })
      .catch(function(err){
        dispatch({type:"DELETE_TEAM_REJECTED", payload:err})
      })
  }
}

// UPDATE A SCOUT
export function updateTeams(team){
  return {
          type:"UPDATE_TEAM",
          payload: team
        }
}
// RESET FORM BUTTON
export function resetButton(){
  return {
          type:"RESET_BUTTON"
        }
}
