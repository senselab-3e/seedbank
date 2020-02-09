import React, { Component } from "react";
import Color from "../components/color";
import RandomThingy from "../components/RandomThingyPlace";

export class Entryway extends Component {
  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }
  render() {
    return (
      <div>
        WELCOME
        <Color />
        <RandomThingy />
      </div>
    );
  }
}

export default Entryway;
