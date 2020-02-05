const Color = {
  blue: "#70CFE1",
  green: "#85C85D",
  yellow: "#E5CF41",
  random: "#81479b"
};

/* eslint-disable import/first */
const divStyle = {
  color: Color.blue,
  background: Color.yellow,
  height: "300px"
};

import React, { Component } from "react";

export class color extends Component {
  render() {
    const getInitialState = () => {
      return { color: Color.green };
    };
    return <div style={divStyle}>Hello World!</div>;
  }
}

export default color;
