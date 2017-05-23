import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { GridList } from 'material-ui/GridList'
import Movie from '../common/Movie'
import {loadMovies, setMovies} from '../../actions/movieActions';


class MovieContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  doSearch(event) {
    this.props.setMovies(event.target.value);
  }
  render() {
    let { loading, movies } = this.props
    return (
      <div style={{'margin-top': '100px', width: '100%'}} className="text-center">
        <TextField name="client-search" floatingLabelText="Search movie by name"
          onChange={this.doSearch.bind(this)} type="text" fullWidth />
          <GridList
            cellHeight={'auto'}
            cols={3}>
            {movies.map(movie =><Movie voteAverage={movie.vote_average}releaseDate={movie.release_date}key={movie.id}img={movie.poster_path}title={movie.title}original={movie.original_title} />)}
          </GridList>
      </div>
    )
  }
}

MovieContainer.propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array
}

const mapStateToProps = state => ({
  loading: state.loading,
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  setMovies: (input) => dispatch(loadMovies(input))
})



export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
