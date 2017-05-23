import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.loading, action) {
  switch(action.type) {
    case types.LOADING_DATA:
      return true;
    case types.DONE_LOADING_DATA:
      return false;
    default:
      return state;
  }
}
