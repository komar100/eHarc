"use strict"


export function teamsReducers(state={
  teams:[]
}, action){
  switch(action.type){
    case "GET_TEAMS":
      return {...state, teams:[...action.payload]}
    break;
    case "GET_TEAMS_REJECTED":
      console.log('coś się odwala');
    break;

  }
  return state;
}
