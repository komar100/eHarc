"use strict"
import axios from 'axios';

// GET A SCOUT
export function getScouts(){
  return function(dispatch){
    axios.get("/api/scouts")
      .then(function(response){
        dispatch({type:"GET_SCOUTS", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"GET_SCOUTS_REJECTED", payload: err.message})
      })
  }
}
// POST A SCOUT
export function postScouts(scout){
  return function(dispatch){
    axios.post("/api/scouts", scout)
      .then(function(response){
        dispatch({type:"POST_SCOUT", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_SCOUT_REJECTED", payload: err.message})
      })
  }
}

// DELETE A SCOUT
export function deleteScouts(id){
  return function(dispatch){
    axios.delete("/api/scouts/" + id)
      .then(function(response){
        dispatch({type:"DELETE_SCOUT", payload:id})
      })
      .catch(function(err){
        dispatch({type:"DELETE_SCOUT_REJECTED", payload:err})
      })
  }
}

// UPDATE A SCOUT
export function updateScouts(scout){
  return {
          type:"UPDATE_SCOUT",
          payload: scout
        }
}
// RESET FORM BUTTON
export function resetButton(){
  return {
          type:"RESET_BUTTON"
        }
}
