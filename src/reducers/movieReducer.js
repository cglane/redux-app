import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.movies, action) {
  switch(action.type) {
    case types.SET_MOVIES:
      return  action.payload.results;
    default:
      return state;
  }
}
