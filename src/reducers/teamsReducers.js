"use strict"


export function teamsReducers(state={
  teams:[]
}, action){
  switch(action.type){
    case "GET_TEAMS":
      return {...state, teams:[...action.payload]}
    break;
    case "POST_TEAMS":
      return {...state, teams:[...state.teams, ...action.payload], msg:'Saved! Click to continue', style:'success', validation:'success'}
    break;
    case "POST_TEAM_REJECTED":
      return {...state, msg:'Please, try again', style:'danger', validation:'error'}
    break;
    case "GET_TEAMS_REJECTED":
      console.log('coś się odwala');
    break;
    case "RESET_BUTTON":
      return {...state, msg:null, style:'primary', validation:null}
    break;
    case "DELETE_TEAM":
      const currentTeamToDelete = [...state.teams]
      const indexToDelete = currentTeamToDelete.findIndex(
        function(team){
          return team._id == action.payload;
        }
      )

      return {teams: [...currentTeamToDelete.slice(0, indexToDelete), ...currentTeamToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_TEAM":
    const currentTeamToUpdate = [...state.team]
    const indexToUpdate = currentTeamToUpdate.findIndex(
      function(team){
        return team._id === action.payload._id;
      }
    )
      const newTeamToUpdate = {
      ...currentTeamToUpdate[indexToUpdate],
      title: action.payload.title
    }
    console.log("what is it newScoutToUpdate", newScoutToUpdate);
    return {teams: [...currentTeamToUpdate.slice(0, indexToUpdate), newTeamToUpdate, ...currentTeamToUpdate.slice(indexToUpdate + 1)]}
    break;
  }
  return state;
}
