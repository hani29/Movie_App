import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Dislike = () => {
  const { Dislike } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Dislike Movies</h1>

          <span className="count-pill">
            {Dislike.length}
            {Dislike.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>

        {Dislike.length > 0 ? (
          <div className="movie-grid">
            {Dislike.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} type="Dislike" />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="no-movies">
              There are no movies in your list, add some!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dislike;
