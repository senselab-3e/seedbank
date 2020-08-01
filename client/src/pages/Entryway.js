import React, { useState } from "react";
import "../style/00.css";
import styled, { keyframes } from "styled-components";
import Pixel from "../components/Pixel";
import Portal from "../components/Portal";

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

//var ypos = (Math.random(window.innerWidth) * window.innerWidth) / 2 + "px"; // i need this because if the a link is  parent of pixel, it needs to share the coors of pixel;
// var xpos =
//   (Math.random(window.innerHeight) * window.innerHeight - 10) / 2 - 15 + "px";

//this isn't working properly -- revisit

//const xpos = ranValMinMax(); // by doing it this way, rather then having xpos be a function (as is seen in num) - i prevent that value from being called repeatedly, each time the components re-render. this would cause the position to change continually. but maybe i want that.

const ranValMinMax = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default function Entryway() {
  //when i left the state blank '' - it would cause problems for the delegation of its value as a prop for the styled components
  const [bcolor, setColor] = useState("#f812c0");
  const [portalnum, setPorts] = useState(0);

  //  How do I update state with values that depend on the current state?
  // Pass a function instead of an object to setState to ensure the call always uses the most updated version of state (see below).

  const addPortals = () => setPorts(portalnum + 1);

  //inline approach <div className="pixel picnicPatch" style={{top: '300px', left: '300px'}}></div>
  //this is useful because i could re-use it for handing random position to many elements -- as the ranValMinMax() will call a unique position every time

  const createPositions = (dim) => {
    let num = "";
    switch (dim) {
      case "top":
        num = ranValMinMax(100, window.innerHeight - 100);
        num += "px";
        break;
      case "left":
        num = ranValMinMax(100, window.innerWidth - 100);
        num += "px";
        break;
      default:
        num = ranValMinMax(100, window.innerHeight - 100);
        num += "px";
    }
    return num;
  };

  //using this approach so that you can more cleanly read and then inject inline styling with a single object

  const portalStyling = {
    top: createPositions("top"),
    left: createPositions("left"),
  };

  //another, non component based approach. this function can be passed into func= of pixel or portal component. just different approaches.
  // const createEl = (e) => {
  //   e.preventDefault();
  //   var pixel = document.createElement("div");
  //   pixel.className = "pixel";
  //   pixel.classList.add("picnicPatch");
  //   pixel.style.left = createPositions("left");
  //   pixel.style.top = createPositions("top");
  //   const container = document.querySelector(".container");
  //   container.appendChild(pixel);
  // };

  let portals = [];
  //portalnum's state is being updated on the component function click, and that hook state then re-loops the creation of the portal component
  for (let i = 0; i < portalnum; i++) {
    portals.push(
      <Portal
        key={Math.random(portalnum)}
        top={createPositions("top")}
        left={createPositions("left")}
        func={addPortals}
      />
    );
  }

  return (
    <BodyColor color={bcolor}>
      <div className="container">
        {portals}

        <div className="pixel picnicPatch hidden" style={portalStyling}></div>
        <Pixel
          top={createPositions("top")}
          left={createPositions("left")}
          func={addPortals}
        ></Pixel>
        <InputColor>
          <p>
            {bcolor} {portalnum}
          </p>
          <input
            className="inputColor"
            type="color"
            defaultValue={bcolor}
            onChange={(e) => setColor(e.target.value)}
          ></input>
        </InputColor>
      </div>
      {console.log(typeof portalnum)}
    </BodyColor>
  );
}
