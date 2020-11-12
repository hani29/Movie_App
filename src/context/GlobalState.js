import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  Favorite: localStorage.getItem("Favorite")
    ? JSON.parse(localStorage.getItem("Favorite"))
    : [],
  Dislike: localStorage.getItem("Dislike")
    ? JSON.parse(localStorage.getItem("Dislike"))
    : []
};

//create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("Favorite", JSON.stringify(state.Favorite));
    localStorage.setItem("Dislike", JSON.stringify(state.Dislike));
  }, [state]);

  // actions
  const addMovieToFavorite = movie => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromFavorite = imdbID => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: imdbID });
  };

  const addMovieToDislike = movie => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToFavorite = movie => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromDislike = imdbID => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: imdbID });
  };

  return (
    <GlobalContext.Provider
      value={{
        Favorite: state.Favorite,
        Dislike: state.Dislike,
        addMovieToFavorite,
        removeMovieFromFavorite,
        addMovieToDislike,
        moveToFavorite,
        removeMovieFromDislike
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
