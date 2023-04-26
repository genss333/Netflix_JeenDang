import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function MoiveDescription() {
  const { movieDetail } = useSelector((state) => state.movieDetail);
  return (
    <Fragment>
      <div className="movie-description">
        <div>
          <h3>{movieDetail.Title}</h3>
        </div>
        <div className="movi-description-content">
          <span>Year: {movieDetail.Year}</span>
          <p>{movieDetail.Plot}</p>
          <p>Director: {movieDetail.Director}</p>
          <p>Actors: {movieDetail.Actors}</p>
          <p>Genre: {movieDetail.Genre}</p>
          <p>Country: {movieDetail.Country}</p>
          <p>Language: {movieDetail.Language}</p>
          <p>Runtime: {movieDetail.Runtime}</p>
          <p>IMDB Rating: {movieDetail.imdbRating}</p>
        </div>
        <div className="movie-description-button">
          <Button variant="danger">Add to Favorite</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default MoiveDescription;
