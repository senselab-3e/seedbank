import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const colorScroll = keyframes`
    15% {
        background-color: var(--entrypatch-color);
    }

    30% {
        background-color: white;
    }

    45% {
        background-color: var(--entrypatch-color);
    }

    60% {
        background-color: black;
    }

    75% {
        background-color: var(--entrypatch-color);
    }

    95% {
        background-color: white;
    }
}`;

const BodyColor = styled.div`
  background-color: ${(props) => props.color};
  height: 100vh;
  width: 100vw;
  -webkit-animation: ${colorScroll} 100s infinite;
  animation: ${colorScroll} 100s infinite;
  --entrypatch-color: #ff1493;
  --varColor1: #5c0232;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const Slide1 = styled.div`
  background-color: ${(props) => props.color};
  width: 50vh;
  height: 100vh;
  color: "green";
`;

const pixel = styled.div`
  position: absolute;
  z-index: 10;
`;

const entry = styled.div`
  position: absolute;

  &:link {
    outline: solid;
    color: limegreen;
  }
`;

const prePicnicPatch = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  background: var(--entrypatch-color);
  -webkit-transition: width 7s, height 7s;
  -webkit-transition-timing-function: ease;
  transition: width 7s, height 7s;
  transition-timing-function: ease;

  &:hover {
    width: 600px;
    height: 600px;
  }
`;

export default function Slides(props) {
  //   const bcolor = "deeppink";
  console.log(props.bgcolor);
  const [bcolor, setColor] = useState(props.bgcolor);
  const [entrypatch, setPatch] = useState("blue");

  return (
    <div>
      <BodyColor color={bcolor}>
        <Slide1 color={entrypatch}></Slide1>
      </BodyColor>
    </div>
  );
}
