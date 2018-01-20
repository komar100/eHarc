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
        case "ADD_TO_EVENT":
             const currentEvent = [...state.events]
             const scoutId = action.payload;
             const newEvent = {
                ...currentEvent[0],
            participants: [...state.events[0].participants,scoutId]
            }
             return {events: [...currentEvent.slice(0, 0), newEvent, ...currentEvent.slice(0 + 1)]
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
          case "DELETE_EVENT_ITEM":

          const current = [...state.events]
          const scout = action.payload
          const i = state.events[0].participants.indexOf(scout)
            const newEv = {
               ...current[0],
           participants: state.events[0].participants.splice(i, 1)
           }
          return {events: [...current.slice(0, 0),newEv, ...current.slice(0 + 1)]}
        break;
        }
  return state
}
