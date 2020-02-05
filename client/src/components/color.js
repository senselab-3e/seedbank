const Color = {
  blue: "#70CFE1",
  green: "#85C85D",
  yellow: "#E5CF41",
  random: "#81479b"
};

/* eslint-disable import/first */
// const divStyle = {
//   color: Color.blue,
//   background: Color.yellow,
//   height: "300px"
// };

const changeColorRandom = () => {
  const values = [Color.blue, Color.green, Color.yellow, Color.random];
  const valueToUse = values[Math.floor(Math.random() * values.length)];
  let color = valueToUse;
  return color;
};

import React, { Component } from "react";

export class color extends Component {
  constructor(props) {
    super(props);
    this.state = { color: changeColorRandom() };
  }

  render() {
    // const getInitialState = () => {
    //   return { color: Color.green };
    // };

    return <div style={{ color: this.state.color }}>Hello World!</div>;
  }
}

export default color;
