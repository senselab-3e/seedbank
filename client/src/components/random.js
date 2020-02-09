import React, { Component } from "react";
import styled from "styled-components";

var linkList = [
  "ecologyofvidz.html",
  "mondayfiles.html",
  "oz-glob.html",
  "pink.html",
  "spincycle.html",
  "swerve.html"
];

const dot = styled.div`
  height: 35px;
  width: 35px;

  border-radius: 50%;
  display: inline-block;
  position: absolute;
  z-index: 100;
`;

const chooseElement = assets =>
  assets[Math.floor(Math.random() * assets.length)];

export class random extends Component {
  render() {
    return <div></div>;
  }
}

export default random;
