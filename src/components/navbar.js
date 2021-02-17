import React from "react";
import "./navbar.css";
import NavLinks from "./navlinks";
import { Link } from "react-router-dom";
import Menubtn from "./menubtn/menubtn";
const Navbar = (props) => {
  return (
    <div className="main-navbar-container">
      <Menubtn></Menubtn>
      <div className="navbar">
        <h1>
          <Link to="/" className="link-class">
            Kitchen titchen
          </Link>
        </h1>
        <nav>
          <NavLinks className="nav" loggedInFailure={props.loggedInFailure} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
