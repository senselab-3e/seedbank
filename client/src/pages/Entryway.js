import React, { Component } from "react";
import Color from "../components/color.js";

export class Entryway extends Component {
  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }
  render() {
    return (
      <div>
        WELCOME
        <Color />
      </div>
    );
  }
}

export default Entryway;
