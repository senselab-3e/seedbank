import React, { useEffect } from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  buttonBackgroundColor,
  buttonTextColor,
  fontStyle
} from "../context/theme";
import { withTheme } from "styled-components";

const Button = styled.button`
  background: ${buttonBackgroundColor};
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;

const HeaderLinks = styled.li`
  color: ${buttonBackgroundColor};
  font-family: ${fontStyle};
`;

//investigat tomorrow
// font-family: ${fontStyle};
// &:hover,
// &:visited {
//   color: ${buttonTextColor};
// }

// //const Link = styled.a`
// color: inherit;
// text-decoration: none;
// &:hover, &:active {
//   text-decoration: underline;
// }
// `
// const P = styled.p`
// ${ Link } {
//   text-decoration: underline;
// }
// `

function Header(props) {
  useEffect(() => {});
  return (
    <React.Fragment>
      <header className="App-header">
        <Button onClick={() => props.themeToggle.toggle()}>
          {props.theme.mode === "dark"
            ? "Switch to Light Mode"
            : "Switch to Dark Mode"}
        </Button>
        <nav>
          <HeaderLinks>
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
          </HeaderLinks>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default withTheme(Header);
