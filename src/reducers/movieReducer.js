const moviesReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      return {
        ...state,
        movies: action.payload.results,
        loading: false
      };
    }
    case "MORE_MOVIES": {
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        loading: false
      };
    }
    case "GET_MOVIES_ERROR": {
      return {
        ...state,
        error: action.payload
      };
    }
    case "MORE_MOVIES_ERROR": {
      return {
        ...state,
        error: action.payload
      };
    }
    case "EACH_MOVIE": {
      return {
        ...state,
        movie: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  movies: [],
  movie: {},
  loading: true
};

export default (state = initialState, action) => moviesReducer(state, action);
