import React, { PropTypes } from 'react';

import { Card, CardActions, CardMedia, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import Paper from 'material-ui/Paper'


const imageStyles = {
  padding: '10px',
  maxHeight: '200px',
  minWidth: 'inherit',
  width: 'inherit',
  maxWidth: '100%'
};

const movieStyles = {
  width: '300px',
  height: '350px',
  margin: '0px 10px 10px 10px'
}

let getTitle = name => (name.slice(0, 42) + (name.length > 42  ? '...' : ''));

let Movie = ({original,title,img, releaseDate, voteAverage}) => (
    <Paper className='text-center'style={movieStyles}>
      <Card>
        <CardHeader
          title={original}
          subtitle="Original Title"
          avatar={`http://image.tmdb.org/t/p/w185/${img}`}
          />
        <CardMedia overlay={<CardTitle title={title} subtitle="Title"  />}>
        <img style={imageStyles}src={`http://image.tmdb.org/t/p/w185/${img}`} />
        </CardMedia>
        <CardText className="text-center">
            Release Date : {releaseDate}
            <br></br>
            Vote Average: {voteAverage}
          </CardText>
      </Card>
    </Paper>
)

Movie.propTypes = {
  original: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.string
}

export default Movie;
