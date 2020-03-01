import React, { Component } from "react";
import Movie from "./Movie";

class Cart extends Component {
  state = {
    movies: []
  };

  componentWillMount() {
    const movies = JSON.parse(localStorage.getItem("movies"));
    this.setState({ movies });
  }
  render() {
    return (
      <div className="row no-gutters justify-content-center">
        {this.state.movies && this.state.movies.length ? (
          this.state.movies.map((movie, i) => (
            <div key={i}>
              <Movie
                title={movie.title}
                id={movie.id}
                poster_path={movie.poster_path}
              />
            </div>
          ))
        ) : (
          <div>
            <br />
            <p>No Items In The Cart</p>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
