import React from "react";
import { NavLink } from "react-router-dom";

const Movie = ({ title, id, poster_path }) => (
  <div className="col s4" style={{ margin: "20px 0" }}>
    <div className="card" style={{ width: "18rem", textAlign: "center" }}>
      <div style={{ margin: "auto" }}>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
          className="bd-placeholder-img card-img-top"
          alt={`${title} movie poster`}
        />
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">{title}</li>
      </ul>
      <div className="card-body">
        <NavLink to={`/movie/${id}`} className="card-link">
          More Details
        </NavLink>
      </div>
    </div>
  </div>
);

export default Movie;
