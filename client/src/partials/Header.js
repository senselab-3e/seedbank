import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";

export default function Header(props) {
  return (
    <nav>
      <div className="header">
        <ul>
          <li>
            <ColorPicker colorCapture={props.colorCapture} />
          </li>
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
    </nav>
  );
}
