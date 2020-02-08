import React, { Component } from "react";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import styled from "styled-components";

const Portal404 = styled.img`
  border: 2px solid transparent;
  &:hover {
    border: 2px solid teal;
  }
`;

const Tiny = styled.img`
  width: 30px;
  height: 30px;
  margin: 300px;

  border: 1px solid transparent;
  &:hover {
    border: 1px solid orange;
  }
`;

const GlitchWrapper = styled.div`
  text-align: center;
`;

class Glitch extends Component {
  //I'm trying out componentWillMount() insted of componentDidMount() so that the current location is passed up immediately to App, but this fires before anything else has loaded on the page. investigate docs for any shortcomings to this approach
  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }
  render() {
    return (
      <div>
        <GlitchWrapper>
          <Portal404 src={glitch} alt="portal" />
          <Tiny src={glitch} alt="portal2"></Tiny>
        </GlitchWrapper>
      </div>
    );
  }
}

export default Glitch;
