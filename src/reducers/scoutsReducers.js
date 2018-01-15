"use strict"

//SCOUTS REDUCERS
export function scoutsReducers(state={
  scouts:[]
}, action){
  switch(action.type){
    case "GET_SCOUTS":
      return {...state, scouts:[...action.payload]}
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
          return scout._id == action.payload;
        }
      )

      return {scouts: [...currentScoutToDelete.slice(0, indexToDelete), ...currentScoutToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_SCOUT":
    const currentScoutToUpdate = [...state.scouts]
    const indexToUpdate = currentScoutToUpdate.findIndex(
      function(scout){
        return scout._id === action.payload._id;
      }
    )
      const newScoutToUpdate = {
      ...currentScoutToUpdate[indexToUpdate],
      title: action.payload.title
    }
    console.log("what is it newScoutToUpdate", newScoutToUpdate);
    return {scouts: [...currentScoutToUpdate.slice(0, indexToUpdate), newScoutToUpdate, ...currentScoutToUpdate.slice(indexToUpdate + 1)]}
    break;
  }
  return state;
}
