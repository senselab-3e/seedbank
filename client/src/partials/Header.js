import React, { useEffect } from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonBackgroundColor, buttonTextColor } from "../context/theme";
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
  font-family: arial;
  &:visited {
   color: ${buttonBackgroundColor};
`;

export const StickyGrid = styled.div`
  border-color: blue;
  border-width: 1px;
  border-style: solid;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: styles => `
  @media only screen and (max-width: 480px) {
    ${styles}
  }`
};

export const Col = styled.div`
  border-color: red;
  border-width: 1px;
  border-style: solid;
  flex: ${props => props.size};
  ${props =>
    props.collapse &&
    media[props.collapse](`
    display:none;
`)};
`;

function Header(props) {
  useEffect(() => {});
  return (
    <React.Fragment>
      <StickyGrid>
        <Row>
          <Col size={1} collapse="xs">
            <Button onClick={() => props.themeToggle.toggle()}>
              {props.theme.mode === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"}
            </Button>
          </Col>

          <Col size={5}>
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
          </Col>
        </Row>
      </StickyGrid>
    </React.Fragment>
  );
}

export default withTheme(Header);
