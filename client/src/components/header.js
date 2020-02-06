import React, { Component } from "react";
// import teapot from "../assets/img/pot.jpg";
import "../style/Header.css";
import { NavLink } from "react-router-dom";
import Color from "./color.js";
import styled from "styled-components";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
  text-align: center;
`;

export default class Header extends Component {
  render() {
    let className = "menu";
    if (this.props.isActive) {
      className += "menu-active";
    }

    return (
      <React.Fragment>
        <Title>styled-component test</Title>

        <nav>
          <Wrapper>
            <NavLink to="/" className={className}>
              Home
            </NavLink>
            |
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
      </React.Fragment>
    );
  }
}
