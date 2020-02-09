import React, { Component } from "react";

// function randomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

export class LinkElementCreator extends Component {
  state = {
    array: this.props.linkList
  };

  render() {
    return <div></div>;
  }
}

export default LinkElementCreator;
