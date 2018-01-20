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
// GET ID
export function getEventsId(_id){
  return function(dispatch){
    axios.get("/api/events/" + _id)
      .then(function(response){
        dispatch({type:"GET_EVENT_ID", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"GET_EVENT_REJECTED", payload: err.message})
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
export function addToEvent(scoutId, eventId, event){
  return function(dispatch){
    axios.put("/api/eventsAdd/"+ scoutId, event)
      .then(function(response){
        dispatch({type:"ADD_TO_EVENT", payload:scoutId})
      })
      .catch(function(err){
        dispatch({type:"ADD_TO_EVENT_REJECTED", msg: err.message})
      })
  }
  // return {
  //         type:"ADD_TO_EVENT",
  //         payload: scoutId
  //       }
}
// DELETE A EVENT
export function deleteEvents(id){
  return function(dispatch){
    axios.delete("/api/events/" + id)
      .then(function(response){
        dispatch({type:"DELETE_EVENT", payload:id})
      })
      .catch(function(err){
        dispatch({type:"DELETE_EVENT_REJECTED", payload:err})
      })
  }
}

// UPDATE
export function updateEvents(event,scoutId){
  return function(dispatch){
    axios.put("/api/events/" ,  event)
      .then(function(response){
        dispatch({type:"UPDATE_EVENT", payload: scoutId})
      })
      .catch(function(err){
        dispatch({type:"UPDATE_EVENT_REJECTED", payload: err.message})
      })
  }

}

// DELETE
export function deleteEventItem(scoutId,event){
  return function(dispatch){
    axios.put("/api/eventsDel/"+ scoutId, event)
      .then(function(response){
        dispatch({type:"DELETE_EVENT_ITEM", payload: scoutId})
      })
      .catch(function(err){
        dispatch({type:"DELETE_EVENT_ITEM_REJECTED", msg: 'error when deleting an item from '})
      })
    }
}
