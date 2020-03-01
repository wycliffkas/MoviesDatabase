import MovieReducer from "../../reducers/movieReducer";

describe("Movie Reducer", () => {
  const actionTypes = (action, payload) => ({
    type: action,
    payload
  });

  const movies = [];
  const movie = {};

  const GET_MOVIES = "GET_MOVIES";
  const MORE_MOVIES = "MORE_MOVIES";
  const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";
  const MORE_MOVIES_ERROR = "MORE_MOVIES_ERROR";
  const EACH_MOVIE = "EACH_MOVIE";

  test("test default for movie reducer", () => {
    expect(MovieReducer(movies, { type: null })).toEqual(movies);
  });

  test("for GET_MOVIES action", () => {
    expect(MovieReducer(movies, actionTypes(GET_MOVIES, {}))).toEqual({
      ...movies,
      loading: false
    });
  });

  test("for GENRES_ERROR action", () => {
    expect(
      MovieReducer(movies, actionTypes(GET_MOVIES_ERROR, "an error ocurred"))
    ).toEqual({
      ...movies,
      error: "an error ocurred"
    });
  });

  test("for MORE_MOVIES_ERROR action", () => {
    expect(
      MovieReducer(movies, actionTypes(MORE_MOVIES_ERROR, "an error ocurred"))
    ).toEqual({
      ...movies,
      error: "an error ocurred"
    });
  });
});
