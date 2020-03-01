const key = "be767a41444abd83b1fe64254fba0f81";
const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=`;
import axios from "axios";

const getMovies = (id, page) => {
  return dispatch => {
    axios
      .get(`${moviesUrl}${id}&page=${page}`)
      .then(data => {
        dispatch({
          type: "GET_MOVIES",
          payload: data.data
        });
      })
      .catch(e => {
        dispatch({
          type: "GET_MOVIES_ERROR",
          payload: e
        });
      });
  };
};

export default getMovies;
