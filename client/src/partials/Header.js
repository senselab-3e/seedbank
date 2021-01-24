import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
import "../style/Header.css";
import { Link} from "react-router-dom"


export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="Header">
        <img className="Cup" src={teapot} alt="teapot"></img>
      </div>
      <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Go to events</Link></li>
        <li> <Link to="/sponges"> 20,000 sponges</Link></li>
        <li> <Link to="/auth">Login or signup</Link></li>
        <li><Link to="/entryway">EntryWay</Link></li>
        <li><Link to="/about3e">3E About</Link></li>
        <li><Link to="/oOoOs">404 oOoO Portal</Link></li>
        <li><Link to="/patches">Patches</Link></li>
        <li><Link to="/socketz">sox</Link></li>
        <li><Link to="/register-a-trace">Register a trace</Link></li>
        <li><Link to="/convotraces">Convotraces</Link></li>
      </ul>
    </nav>
    </React.Fragment>
    );
  }
}
