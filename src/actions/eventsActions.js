"use strict"
import axios from 'axios';

// GET
export function getEvents(){
  return function(dispatch){
    axios.get('/api/events')
     .then(function(response){
       dispatch({type:"GET_EVENT", payload:response.data})
     })
     .catch(function(err){
       dispatch({type:"GET_EVENT_REJECTED", msg:"error when getting the event from session"})
     })
  }
}
// POST
export function postEvents(event){
  return function(dispatch){
    axios.post("/api/events", event)
      .then(function(response){
        dispatch({type:"POST_EVENT", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_EVENT_REJECTED", payload: err.message})
      })
  }
}

// ADD
export function addToEvent(scout){
  return function(dispatch){
    axios.post("/api/Event", scout)
      .then(function(response){
        dispatch({type:"ADD_TO_EVENT", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"ADD_TO_EVENT_REJECTED", msg: 'error when adding to the cart'})
      })
  }
}
// UPDATE

export function updateEvent(_id, unit, event){
  const currentScoutToUpdate = event
  const indexToUpdate = currentScoutToUpdate.findIndex(
    function(scout){
      return scout._id === _id;
    }
  )

  const newScoutToUpdate = {
    ...currentScoutToUpdate[indexToUpdate],
    quantity: currentScoutToUpdate[indexToUpdate].quantity + unit
  }

  let eventUpdate = [...currentScoutToUpdate.slice(0, indexToUpdate), newScoutToUpdate, ...currentScoutToUpdate.slice(indexToUpdate + 1)]

  return function(dispatch){
    axios.post("/api/event", eventUpdate)
      .then(function(response){
        dispatch({type:"UPDATE_EVENT", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"UPDATE_EVENT_REJECTED", msg: 'error when adding to the cart'})
      })
  }
}
// DELETE
export function deleteEventItem(scout){
  return function(dispatch){
    axios.post("/api/events", scout)
      .then(function(response){
        dispatch({type:"DELETE_EVENT_ITEM", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"DELETE_EVENT_ITEM_REJECTED", msg: 'error when deleting an item from '})
      })
  }
}
