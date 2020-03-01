const key = "be767a41444abd83b1fe64254fba0f81";

import axios from "axios";

const getMovieById = movieId => {
  const moviesUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;
  return dispatch => {
    axios
      .get(moviesUrl)
      .then(data => {
        dispatch({
          type: "EACH_MOVIE",
          payload: data.data
        });
      })
      .catch(error => {
        dispatch({
          type: "EACH_MOVIE_ERROR",
          payload: error
        });
      });
  };
};

export default getMovieById;
