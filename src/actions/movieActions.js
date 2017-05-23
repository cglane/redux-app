import * as types from './actionTypes';
import movieApi from '../api/MovieApi';

export function setMovies(movies) {
  return {type: types.SET_MOVIES, payload: movies};
}

export function loadMovies(input) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch({type: types.LOADING_DATA});
      return movieApi.getMovies(input).then(movies => {
        movies.results = movies.results.filter(movie =>  movie.poster_path);
        dispatch(setMovies(movies));
        setTimeout(function () {
          dispatch({type: types.DONE_LOADING_DATA});
        }, 2000);
      }).catch(error => {
        throw(error);
      });
  };
}
