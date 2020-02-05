import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
import "../style/Header.css";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    let className = "menu";
    if (this.props.isActive) {
      className += "menu-active";
    }

    return (
      <React.Fragment>
        <div className="Header">
          <img className="Cup" src={teapot} alt="teapot"></img>
        </div>
        <nav>
          <NavLink to="/" className={className}>
            Home
          </NavLink>
          |
          <NavLink to="/events" className={className}>
            Go to events
          </NavLink>
          |
          <NavLink to="/auth" className={className}>
            Login or signup
          </NavLink>
          |
          <NavLink to="/entryway" className={className}>
            EntryWay
          </NavLink>
          |
          <NavLink to="/about3e" className={className}>
            3E About
          </NavLink>
          |
          <NavLink to="/oOoOs" className={className}>
            404 oOoO Portal
          </NavLink>
          |
          <NavLink to="/patches" className={className}>
            Patches
          </NavLink>
        </nav>
      </React.Fragment>
    );
  }
}
