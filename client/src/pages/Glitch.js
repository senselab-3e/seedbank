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
  // componentDidMount() {
  //   this.props.updateLocation(window.location);
  // }
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
