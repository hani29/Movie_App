import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Favorite = () => {
  const { Favorite } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Movies Favorite</h1>

          <span className="count-pill">
            {Favorite.length}
            {Favorite.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>

        {Favorite.length > 0 ? (
          <div className="movie-grid">
            {Favorite.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} type="Favorite" />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="no-movies">
              There are no movies in your Favorite!
            </h2>
            <p>
              Click <a href="/add">here</a> to search and add movies to the
              Favorite.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
