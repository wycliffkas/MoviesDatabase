import GenreReducer from "../../reducers/genreReducer";

describe("Genre Reducer", () => {
  const actionTypes = (action, payload) => ({
    type: action,
    payload
  });

  const genres = [];
  const GENRES = "GENRES";
  const GENRES_ERROR = "GENRES_ERROR";

  test("test default for genre reducer", () => {
    expect(GenreReducer(genres, { type: null })).toEqual(genres);
  });

  test("for GENRES action", () => {
    expect(GenreReducer(genres, actionTypes(GENRES, {}))).toEqual({
      ...genres,
      loading: false
    });
  });

  test("for GENRES_ERROR action", () => {
    expect(
      GenreReducer(genres, actionTypes(GENRES_ERROR, "an error ocurred"))
    ).toEqual({
      ...genres,
      error: "an error ocurred"
    });
  });
});
