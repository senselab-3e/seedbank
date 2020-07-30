import React, { useState } from "react";
//import "../style/00.css";
import styled, { keyframes } from "styled-components";

const colorScroll = keyframes`
    0% {
        background-color: var(--entrypatch-color);
    }

    30% {
        background-color: white;
    }

    45% {
        background-color: var(--entrypatch-color);
    }

    70% {
        background-color: black;
    }

    95% {
      background-color: var(--entrypatch-color);
    }
}`;

const BodyColor = styled.div`
  background-color: var(--entrypatch-color);
  height: 100vh;
  width: 100vw;
  -webkit-animation: ${colorScroll} 60s infinite;
  animation: ${colorScroll} 60s infinite;
  --entrypatch-color: ${(props) => props.color};
  --varColor1: #5c0232;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const InputColor = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
`;

const Pixel = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: var(--entrypatch-color);
`;

//i could also do ${(props) => props.color} or just as easily reference var(--entrypatch-color)

//import styled, { keyframes } from "styled-components";

var xpos = (Math.random(window.innerWidth) * window.innerWidth) / 2 + "px"; // i need this because if the a link is  parent of pixel, it needs to share the coors of pixel;
var ypos =
  (Math.random(window.innerHeight) * window.innerHeight) / 2 - 15 + "px";

export default function Entryway() {
  //when i left the state blank '' - it would cause problems for the delegation of its value as a prop for the styled components
  const [bcolor, setColor] = useState("#f812c0");

  return (
    <BodyColor color={bcolor}>
      <Pixel color={bcolor} left={xpos} top={ypos}></Pixel>
      <div className="colorBox">
        <InputColor>
          <p>{bcolor}</p>
          <input
            className="inputColor"
            type="color"
            defaultValue={bcolor}
            onChange={(e) => setColor(e.target.value)}
          ></input>
        </InputColor>
      </div>
    </BodyColor>
  );
}
