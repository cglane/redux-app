import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MovieContainer from './components/movies/MovieContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieContainer} />
  </Route>
);
