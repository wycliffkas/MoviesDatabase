const genresReducer = (state, action) => {
  switch (action.type) {
    case "GENRES": {
      return {
        ...state,
        genres: action.payload.genres,
        loading: false
      };
    }
    case "GENRES_ERROR": {
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  genres: [],
  loading: true
};

export default (state = initialState, action) => genresReducer(state, action);
