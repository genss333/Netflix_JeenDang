import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

function MovieCardImage() {
  const {movieDetail} = useSelector((state) => state.movieDetail);

  return (
    <Fragment>
      <div className="movie-image">
        <img src={movieDetail.Poster} alt={movieDetail.Title} />
      </div>
    </Fragment>
  )
}

export default MovieCardImage