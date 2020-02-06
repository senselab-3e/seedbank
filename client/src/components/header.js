import React, { Component } from "react";
// import teapot from "../assets/img/pot.jpg";
// import "../style/Header.css";
import { NavLink } from "react-router-dom";
import Color from "./color.js";
import styled from "styled-components";

//If the styled target is a simple element (e.g. styled.div), styled-components passes through any known HTML attribute to the DOM. If it is a custom React component (e.g. styled(MyComponent)), styled-components passes through all props.

const NavButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  margin: 0.5rem 1rem;
  width: 11rem;
  font-size: 1em;
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "teal" : "transparent")};
  color: ${props => (props.primary ? "white" : "teal")};
  text-decoration: none;
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
  state = {
    isActive: "true"
  };

  render() {
    // let className = "menu";
    // if (this.props.isActive) {
    //   className += "menu-active";
    // }

    return (
      <React.Fragment>
        <nav>
          <Wrapper>
            <NavButton as={NavLink} to="/" primary={this.state.isActive}>
              Home
            </NavButton>
            <NavButton as={NavLink} to="/auth">
              login or signup
            </NavButton>
            <NavButton as={NavLink} to="/events">
              eventlisting
            </NavButton>
            <NavButton as={NavLink} to="/about">
              About oOoOs
            </NavButton>
            <NavButton as={NavLink} to="/oOoOs">
              404 oOoO Portal
            </NavButton>
            <NavButton as={NavLink} to="/patches">
              picnicpatches
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
