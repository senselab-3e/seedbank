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
  background-color: ${buttonBackgroundColor};
  float: left;
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;

const NavItem = styled(Link)`
padding: 0.5em 1em;
position: relative;
font-size: 1em;
background-color: ${buttonTextColor};
display:inline-block;
color: ${buttonBackgroundColor};
  font-family: ${fontStyle};
  &:visited {
   color: ${buttonBackgroundColor};
`;

const StickyHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

//float: left; --- removing that made the header elements not wrap the succeeding component titles (such as glitch, home etc)..

// NavItem.defaultProps = {
//   activeClassName: "active"
// };

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
      <StickyHeader>
        <header className="App-header">
          <Button onClick={() => props.themeToggle.toggle()}>
            {props.theme.mode === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"}
          </Button>

          <NavItem to="/events">hello?</NavItem>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/events">Go to events</NavItem>
          <NavItem to="/auth">Login or signup</NavItem>
          <NavItem to="/entryway">EntryWay</NavItem>
          <NavItem to="/about3e">3E About</NavItem>
          <NavItem to="/play">
            Play -- refactoring spot for random element components and
            retrieving arrays
          </NavItem>
          <NavItem to="/oOoOs">Event List retrieved by Context/Hooks</NavItem>
          <NavItem to="/patches">Patches</NavItem>
          <NavItem to="/traces">Register a trace</NavItem>
        </header>
      </StickyHeader>
    </React.Fragment>
  );
}

export default withTheme(Header);
