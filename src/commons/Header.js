import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="#" className="navbar-brand" style={{ paddingLeft: "180px" }}>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
          height="46"
          alt="movie database"
        />
      </a>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link nav-home">
            Home
          </NavLink>
          <NavLink to="/cart" className="nav-item nav-link">
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
