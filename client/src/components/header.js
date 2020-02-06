import React, { Component } from "react";
// import teapot from "../assets/img/pot.jpg";
// import "../style/Header.css";
import { NavLink } from "react-router-dom";
import Color from "./color.js";
import styled from "styled-components";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const NavButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  margin: 0.5rem 1rem;
  width: 11rem;
  font-size: 1em;
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "teal" : "white")};
  color: ${props => (props.primary ? "white" : "teal")};
  text-align: center;
  padding: 0.5rem 0;
  margin: 10px 5px 10px 5px;
  border: 2px solid teal;
`;

const Wrapper = styled.section`
  padding: 0.3em;
  text-align: left;
`;

export default class Header extends Component {
  render() {
    // let className = "menu";
    // if (this.props.isActive) {
    //   className += "menu-active";
    // }

    return (
      <React.Fragment>
        <nav>
          <Wrapper>
            <NavButton as={NavLink} to="/" primary>
              Home
            </NavButton>
            <NavButton as={NavLink} to="/auth">
              login or signup
            </NavButton>
          </Wrapper>
        </nav>
        <Color />
      </React.Fragment>
    );
  }
}

//another approach

/* <React.Fragment>
<nav>
  <Wrapper>
    <NavLink to="/">Home</NavLink>|
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
  </Wrapper>
</nav>
<Color />
</React.Fragment> */
