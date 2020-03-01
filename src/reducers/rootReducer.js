import { combineReducers } from "redux";
import genresReducer from "./genreReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  genresReducer,
  movieReducer
});
