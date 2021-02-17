import React, { useState } from "react";
import "./menulinks.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Menulinks = (props) => {
  const [state, setstate] = useState(null);
  const loggedInFailure = () => {
    setstate(false);
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("userId", " ");
    window.location.reload(false);
  };
  const withlogin = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      return (
        <div className="conatiner_nav">
          <ul className="ulists">
            <li className="myli">
                <NavLink to="/allrecipes" className="navlinkss">
                  Recipes
                </NavLink>
            </li>
            <li className="myli">
              <NavLink
                to={`/myrecipes/${localStorage.getItem("userId")}`}
                className="navlinkss"
              >
                My Recipes
              </NavLink>
            </li>
            <li className="myli">
              <NavLink to="/about" className="navlink">
                About
              </NavLink>
            </li>
            <li className="myli" onClick={loggedInFailure}>
              Logout
            </li>
          </ul>
          <div className="closeNavbar" onClick={props.togglemenu}></div>
        </div>
      );
    } else {
      return (
        <div className="conatiner_nav">
          <ul className="ulists">
            <li className="myli">
                <NavLink to="/allrecipes" className="navlinkss">
                  Recipes
                </NavLink>
            </li>
            <li className="myli">
              <NavLink
                to={`/myrecipes/${localStorage.getItem("userId")}`}
                className="navlinkss"
              >
                My Recipes
              </NavLink>
            </li>
            <li className="myli">
              <NavLink to="/about" className="navlink">
                About
              </NavLink>
            </li>
            <li className="myli">
              <NavLink to="/auth" className="navlinkss">
                Authentication
              </NavLink>
            </li>
          </ul>
          <div className="closeNavbar" onClick={props.togglemenu}></div>
        </div>
      );
    }
  };
  return <div className="navlink-main">{withlogin()}</div>;
};

export default Menulinks;
