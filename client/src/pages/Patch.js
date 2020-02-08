import React, { Component } from "react";
import patch from "../assets/img/threshold-1.gif";

// import { withTheme } from "styled-components";
// import styled from "styled-components";

export class Patch extends Component {
  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }

  render() {
    return (
      <div>
        <img src={patch} alt="threshold"></img>
      </div>
    );
  }
}

export default Patch;
