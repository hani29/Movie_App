export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        Favorite: [action.payload, ...state.Favorite]
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        Favorite: state.Favorite.filter(
          movie => movie.imdbID !== action.payload
        )
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        Favorite: state.Favorite.filter(
          movie => movie.imdbID !== action.payload.imdbID
        ),
        Dislike: [action.payload, ...state.Dislike]
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        Dislike: state.Dislike.filter(
          movie => movie.imdbID !== action.payload.imdbID
        ),
        Favorite: [action.payload, ...state.Favorite]
      };
    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        Dislike: state.Dislike.filter(movie => movie.imdbID !== action.payload)
      };
    default:
      return state;
  }
};
