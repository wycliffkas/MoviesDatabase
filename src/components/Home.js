import React, { Component } from "react";
import { connect } from "react-redux";
import genres from "../actions/getGenres";
import movies from "../actions/getMovies";
import load from "../actions/loadMore";
import Movie from "./Movie";
import MovieList from "./MovieList";
import Loader from "../utils/Loader";

export class Home extends Component {
  state = {
    selected: false,
    page: 1,
    category: ""
  };

  componentDidMount() {
    const { getGenres } = this.props;
    getGenres();
  }

  categoryChangedHandler = event => {
    const { getMovies } = this.props;
    const category = event.target.value;
    getMovies(category, 1);
    this.setState({ selected: true, category });
  };

  loadMoreData = () => {
    this.setState(
      prevState => ({ ...prevState, page: prevState.page + 1 }),
      () => {
        this.props.loadMoreMovies(this.state.category, this.state.page);
      }
    );
  };

  render() {
    const { genres, error: genreError } = this.props.genresReducer;
    const { loading, movies, error: moviesError } = this.props.movieReducer;

    return (
      <div>
        {genreError || moviesError ? (
          <p style={{ textAlign: "center", paddingTop: "50px", color: "red" }}>
            <strong>
              Error fetching movies from "The Movies Database". <br />
              check internet connection and if problem persists contact Admin
            </strong>
          </p>
        ) : (
          <div>
            <div className="container col s12">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  paddingTop: "20px"
                }}
              >
                <strong>Movie Category:</strong> &nbsp;&nbsp;&nbsp;
                <select
                  className="select-category"
                  onChange={this.categoryChangedHandler}
                >
                  <option value="">Category</option>
                  {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="row no-gutters justify-content-center">
                {!this.state.selected ? (
                  <div style={{ paddingTop: "30px", color: "blue" }}>
                    <p>
                      <strong>Please select a Movie Category</strong>
                    </p>
                  </div>
                ) : (
                  <MovieList
                    loading={loading}
                    movies={movies}
                    callback={this.loadMoreData}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = ({ genresReducer, movieReducer }) => ({
  genresReducer,
  movieReducer
});
export const mapDispatchToProps = dispatch => ({
  getGenres: () => dispatch(genres()),
  getMovies: (id, page) => dispatch(movies(id, page)),
  loadMoreMovies: (id, page) => dispatch(load(id, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
