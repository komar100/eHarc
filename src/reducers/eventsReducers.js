"use strict"

export function eventsReducers(state={events: []}, action) {
  switch(action.type) {
        case "GET_EVENT":
        return{...state,
          events:action.payload
        }
        break;
        case "GET_EVENT_ID":
          return {...state, events:action.payload}
        break;
        case "POST_EVENT":
          return {...state,
            events:[...state.events, ...action.payload],}
        break;
        break;
        case "ADD_TO_EVENT":
           return {...state,
             events:action.payload
           }
           break;
           case "DELETE_EVENT":
             const currentEventToDelete = [...state.events]
             const indexToDelete = currentEventToDelete.findIndex(
               function(event){
                 return event._id == action.payload;
               }
             )

             return {events: [...currentEventToDelete.slice(0, indexToDelete), ...currentEventToDelete.slice(indexToDelete + 1)]}
           break;
           case "UPDATE_EVENT":
           const currentEventToUpdate = [...state.events]
           const newEventToUpdate = action.payload;
           return {events: [...currentEventToUpdate.slice(0, 0), newEventToUpdate, ...currentEventToUpdate.slice(0 + 1)]}
           break;
    break;
    case "DELETE_EVENT_ITEM":
    return {...state,
      events: action.payload
    }
    break;
  }
  return state
}
