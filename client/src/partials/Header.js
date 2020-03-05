import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonBackgroundColor, buttonTextColor } from "../context/theme";
import { withTheme } from "styled-components";
import { useTheme } from "../context/GlobalState";

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
display: flex;
justify-content: space-between;
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
  // border-color: blue;
  // border-width: 1px;
  // border-style: solid;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
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
  // border-color: red;
  // border-width: 1px;
  // border-style: solid;
  display: flex;
  justify-content: space-around;
  flex: ${props => props.size};
  ${props =>
    props.collapse &&
    media[props.collapse](`
    display:none;
`)};
`;

//NOTE: stashing syntax for flexbox: justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly

//Pure components defined as function will always re-render" this is correct. The moment new props get passed down it re-renders
//A functional component will rerender every time the parent renders it, no matter if the props have changed or not.
//---> because my withTheme is wrapping everything... it's rerendering alll the child components.
//https://stackoverflow.com/questions/40909902/shouldcomponentupdate-in-function-components

function Header(props) {
  const themeToggle = useTheme();
  return (
    <React.Fragment>
      <StickyGrid>
        <Row>
          <Col size={1} collapse="xs">
            <Button onClick={() => themeToggle.toggle()}>
              {props.theme.mode === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"}
            </Button>
          </Col>
          <Col size={1}>
            <NavItem to="/events"> hello ? </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/"> Home </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/events"> EventList - oldway </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/auth"> Login or signup </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/entryway"> EntryWay </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/about3e"> 3 E About </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/play"> Play--spot for random </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/oOoOs"> EventList w / Context / Hooks </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/patches"> Patches </NavItem>
          </Col>
          <Col size={1}>
            <NavItem to="/traces"> Register a trace </NavItem>
          </Col>
        </Row>
      </StickyGrid>
    </React.Fragment>
  );
}

export default withTheme(Header);
