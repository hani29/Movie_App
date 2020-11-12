import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromFavorite,
    addMovieToDislike,
    moveToFavorite,
    removeMovieFromDislike
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "Favorite" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToDislike(movie)}>
            <i className="fa fa-heart"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromFavorite(movie.imdbID)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "Dislike" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToFavorite(movie)}>
            <i className="fa fa-heart"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromDislike(movie.imdbID)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
