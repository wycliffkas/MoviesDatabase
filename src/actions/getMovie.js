import axios from "axios";
const tmdToken = process.env.TMD_TOKEN;
const getMovieById = movieId => {
  const moviesUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdToken}&language=en-US`;
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
