import React, { useState } from "react";
import "../style/00.css";
import styled, { keyframes } from "styled-components";
import Pixel from "../components/Pixel";

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
  padding: 0px;
  margin: 0px;
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

var ypos = (Math.random(window.innerWidth) * window.innerWidth) / 2 + "px"; // i need this because if the a link is  parent of pixel, it needs to share the coors of pixel;
// var xpos =
//   (Math.random(window.innerHeight) * window.innerHeight - 10) / 2 - 15 + "px";

const num = () => {
  let num = Math.ceil(Math.random(window.innerHeight) * window.innerHeight);
  num < 50 && num > window.innerHeight - 100 ? ypos() : console.log("nothing");

  return num + "px";
};

const xpos = num(); // by doing it this way, rather then having xpos be a function (as is seen in num) - i prevent that value from being called repeatedly, each time the components re-render. this would cause the position to change continually. but maybe i want that.

export default function Entryway() {
  //when i left the state blank '' - it would cause problems for the delegation of its value as a prop for the styled components
  const [bcolor, setColor] = useState("#f812c0");

  //<Pixel color={bcolor} left={xpos} top={ypos}></Pixel>

  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <BodyColor color={bcolor}>
      <div
        className="pixel picnicPatch"
        style={{ top: "300px", left: "300px" }}
      ></div>
      <Pixel top={xpos} left={ypos} func={handleClick}></Pixel>
      <InputColor>
        <p>{bcolor}</p>
        <input
          className="inputColor"
          type="color"
          defaultValue={bcolor}
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </InputColor>
    </BodyColor>
  );
}
