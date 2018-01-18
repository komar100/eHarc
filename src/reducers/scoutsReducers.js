"use strict"

//SCOUTS REDUCERS
export function scoutsReducers(state={
  scouts:[]
}, action){
  switch(action.type){
    case "GET_SCOUTS":
      return {...state, scouts:[...action.payload]}
    break;
    case "GET_SCOUTS_ID":
      return {...state, scouts:action.payload}
    break;
    case "POST_SCOUT":
      return {...state, scouts:[...state.scouts, ...action.payload], msg:'Saved! Click to continue', style:'success', validation:'success'}
    break;
    case "POST_SCOUT_REJECTED":
      return {...state, msg:'Please, try again', style:'danger', validation:'error'}
    break;
    case "GET_SCOUTS_REJECTED":
      console.log('coś się odwala');
    break;
    case "RESET_BUTTON":
      return {...state, msg:null, style:'primary', validation:null}
    break;
    case "DELETE_SCOUT":
      const currentScoutToDelete = [...state.scouts]
      const indexToDelete = currentScoutToDelete.findIndex(
        function(scout){
          return scout._id == action.payload._id;
        }
      )

      return {scouts: [...currentScoutToDelete.slice(0, indexToDelete), ...currentScoutToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_SCOUT":
    const currentScoutToUpdate = [...state.scouts]
    const newScoutToUpdate = action.payload;
    return {scouts: [...currentScoutToUpdate.slice(0, 0), newScoutToUpdate, ...currentScoutToUpdate.slice(0 + 1)]}
    break;
  }
  return state;
}
