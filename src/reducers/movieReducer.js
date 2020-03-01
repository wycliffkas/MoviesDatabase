const moviesReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      if (action.payload) {
        return {
          ...state,
          //   movies: [...state.movies, ...action.payload.results],
          movies: action.payload.results,
          loading: false
        };
      }
    }
    case "MORE_MOVIES": {
      if (action.payload) {
        console.log("thi--->", action.payload);
        return {
          ...state,
          movies: [...state.movies, ...action.payload.results],
          // movies: action.payload.results,
          loading: false
        };
      }
    }
    case "GET_MOVIES_ERROR": {
      if (action.payload) {
        return {
          ...state,
          message: action.payload
        };
      }
    }
    case "MORE_MOVIES_ERROR": {
      if (action.payload) {
        return {
          ...state,
          message: action.payload
        };
      }
    }
    case "EACH_MOVIE": {
      if (action.payload) {
        console.log("thiis is the payload--->", action.payload);
        return {
          ...state,
          movie: action.payload
        };
      }
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
