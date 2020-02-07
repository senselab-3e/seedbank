import React, { Component } from "react";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import styled from "styled-components";

const Portal404 = styled.img`
  &:hover {
    border: 2px solid teal;
  }
`;

const Tiny = styled.div``;

class Glitch extends Component {
  //I'm trying out componentWillMount() insted of componentDidMount() so that the current location is passed up immediately to App, but this fires before anything else has loaded on the page. investigate docs for any shortcomings to this approach
  componentWillMount() {
    this.props.updateLocation(window.location);
  }
  render() {
    return (
      <div>
        <div className="centerAlign">
          <Portal404 src={glitch} alt="portal" />
        </div>
      </div>
    );
  }
}

export default Glitch;
