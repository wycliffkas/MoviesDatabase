import React, { Component } from "react";
import { connect } from "react-redux";
import getMovie from "../actions/getMovie";
import Loader from "../utils/Loader";

export class MovieDetails extends Component {
  state = {
    movies: []
  };
  addToCart(movie) {
    let moviesArray = localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : [];
    moviesArray.push(movie);
    localStorage.setItem("movies", JSON.stringify(moviesArray));
    alert("Movie has been added to cart!");
  }
  UNSAFE_componentWillMount() {
    this.props.getMovie(this.props.match.params.id);
  }
  render() {
    const { movie } = this.props;

    return (
      <>
        {this.state.movies ? (
          <div
            className="row justify-content-center d-flex align-items-center"
            style={{ paddingTop: "70px" }}
          >
            <div
              className="card mb-3"
              style={{ maxWidth: "70%", maxWidth: "50%" }}
            >
              <div className="row no-gutters">
                <div className="col-md-5">
                  <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                      movie ? movie.poster_path : null
                    }`}
                    className="card-img"
                    alt="{movie[0].title}"
                    style={{
                      display: "block",
                      marginRight: "auto",
                      marginLeft: "auto"
                    }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h3 className="card-title">{movie.title}</h3>
                    <h5>Description</h5>
                    <p className="card-text">{movie.overview}</p>
                    <p className="card-text">
                      <strong>Release Date:</strong> {movie.release_date}
                    </p>
                    <p className="card-text">
                      <strong>Vote Average:</strong> {movie.vote_average}
                    </p>
                    <br />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => this.addToCart(movie)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export const mapStateToProps = ({ movieReducer }) => ({
  movies: movieReducer.movies,
  movie: movieReducer.movie
});

export default connect(mapStateToProps, { getMovie })(MovieDetails);
