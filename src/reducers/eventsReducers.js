"use strict"

export function eventsReducers(state={events: []}, action) {
  switch(action.type) {
        case "GET_EVENT":
        return{...state,
          events:action.payload
        }
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
    case "UPDATE_EVENT":

    return {...state,
      events:action.payload
    }
    break;
    case "DELETE_EVENT_ITEM":
    return {...state,
      events: action.payload
    }
    break;
  }
  return state
}
