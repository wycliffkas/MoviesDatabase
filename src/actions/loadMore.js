import axios from "axios";
const tmdToken = process.env.TMD_TOKEN;
const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdToken}&language=en-US&with_genres=`;

const loadMovies = (id, page) => {
  return dispatch => {
    axios
      .get(`${moviesUrl}${id}&page=${page}`)
      .then(data => {
        dispatch({
          type: "MORE_MOVIES",
          payload: data.data
        });
      })
      .catch(error => {
        dispatch({
          type: "MORE_MOVIES_ERROR",
          payload: error
        });
      });
  };
};

export default loadMovies;
