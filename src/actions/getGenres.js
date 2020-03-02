const tmdToken = process.env.TMD_TOKEN;
const moviesUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdToken}&language=en-US`;

import axios from "axios";

export const genres = () => {
  return dispatch => {
    axios
      .get(moviesUrl)
      .then(data => {
        dispatch({
          type: "GENRES",
          payload: data.data
        });
      })
      .catch(error => {
        dispatch({
          type: "GENRES_ERROR",
          payload: error
        });
      });
  };
};

export default genres;
