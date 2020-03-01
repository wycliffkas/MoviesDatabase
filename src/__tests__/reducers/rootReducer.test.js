import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";

const store = createStore(rootReducer);

describe("Root reducer", () => {
  const initialState = {
    genresReducer: {
      genres: [],
      loading: true
    },
    movieReducer: {
      loading: true,
      movie: {},
      movies: []
    }
  };
  test("test root reducer", () => {});
  expect(store.getState()).toEqual(initialState);
});
