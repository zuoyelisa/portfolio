import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/applications" activeClassName="selected">
              Applications
            </NavLink>
          </li>
          <li>
            <NavLink to="/websites" activeClassName="selected">
              Websites
            </NavLink>
          </li>
          <li>
            <NavLink to="/animations" activeClassName="selected">
              Animations
            </NavLink>
          </li>
          <li>
            <NavLink to="/other_works" activeClassName="selected">
              Other works
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" activeClassName="selected">
              CV
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
