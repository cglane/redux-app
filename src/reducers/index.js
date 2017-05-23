import {combineReducers} from 'redux';
import loading from './loadingReducer';
import movies from './movieReducer';

const rootReducer = combineReducers({
  loading,
  movies
});

export default rootReducer;
