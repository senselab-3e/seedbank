import React, { Component } from "react";
import patch from "../assets/img/threshold-1.gif";

export class Patch extends Component {
  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }

  render() {
    return (
      <div>
        <img src={patch}></img>
      </div>
    );
  }
}

export default Patch;
