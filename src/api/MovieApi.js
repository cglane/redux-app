class MovieApi {
  static getMovies(input) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=784dd6d067b6aeedb864e6123cbe6c51&language=en-US&page=1&include_adult=false&query=${input}`).then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }

}

export default MovieApi;
