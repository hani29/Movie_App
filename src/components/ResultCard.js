import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const {
    addMovieToFavorite,
    Favorite,
    Dislike,
    addMovieToDislike
  } = useContext(GlobalContext);

  let storedMovie = Favorite.find(o => o.imdbID === movie.imdbID);
  let storedMovieDislike = Dislike.find(o => o.imdbID === movie.imdbID);

  const FavoriteDisabled = storedMovie
    ? true
    : storedMovieDislike
    ? true
    : false;

  const DislikeDisabled = storedMovieDislike ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster === "N/A" ? (
          <div className="filler-poster"></div>
        ) : (
          <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-year">{movie.Year ? movie.Year : "-"}</h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToFavorite(movie)}
            disabled={FavoriteDisabled}
          >
            Add to Favorite
          </button>

          <button
            className="btn"
            onClick={() => addMovieToDislike(movie)}
            disabled={DislikeDisabled}
          >
            Add to Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
