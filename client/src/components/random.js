import React, { Component } from "react";
//import styled from "styled-components";

var linkList = [
  "ecologyofvidz.html",
  "mondayfiles.html",
  "oz-glob.html",
  "pink.html",
  "spincycle.html",
  "swerve.html"
];

// const dot = styled.div`
//   height: 35px;
//   width: 35px;

//   border-radius: 50%;
//   display: inline-block;
//   position: absolute;
//   z-index: 100;
//   &:hover {
//     border: 0.1rem solid deeppink;
//     opacity: 0.7;
//   }
// `;

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

linkList.forEach(function(txt2) {
  var newLinkDot = document.createElement("div");
  newLinkDot.className = "dot";
  newLinkDot.style.backgroundColor = randomColor();
  var a = document.createElement("a");
  a.href = "https://convalizards.glitch.me/" + txt2;
  a.className = "dotlinks";
  a.appendChild(newLinkDot);
  document.body.append(a);
});

// const chooseElement = assets =>
//   assets[Math.floor(Math.random() * assets.length)];

export class random extends Component {
  render() {
    return <div></div>;
  }
}

export default random;
