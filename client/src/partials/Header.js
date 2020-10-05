import React, { Component } from "react";
import "../style/header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Go to events</Link>
            </li>
            <li>
              {" "}
              <Link to="/auth">Login or signup</Link>
            </li>
            <li>
              <Link to="/entryway">EntryWay</Link>
            </li>
            <li>
              <Link to="/about3e">3E About</Link>
            </li>
            <li>
              <Link to="/oOoOs">404 oOoO Portal</Link>
            </li>
            <li>
              <Link to="/patches">Patches</Link>
            </li>
            <li>
              <Link to="/traces">Register a trace</Link>
            </li>
          </ul>
        </div>
        <nav></nav>
      </React.Fragment>
    );
  }
}
