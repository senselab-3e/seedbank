import React, { Component } from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Header"></div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Go to events</Link>
            </li>
            <li>
              <Link to="/auth">Login or signup</Link>
            </li>
            <li>
              <Link to="/entryway">EntryWay</Link>
            </li>
            <li>
              <Link to="/about3e">3E About</Link>
            </li>
            <li>
              <Link to="/play">
                Play -- refactoring spot for random element components and
                retrieving arrays
              </Link>
            </li>
            <li>
              <Link to="/oOoOs">Event List retrieved by Context/Hooks</Link>
            </li>
            <li>
              <Link to="/patches">Patches</Link>
            </li>
            <li>
              <Link to="/traces">Register a trace</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
