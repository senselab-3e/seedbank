import React from "react";
import styled from "styled-components";

///THIS IS NOT CURRENTLY BEING USED. a 'createEl function' is being used in Entryway.js instead. there were too many issues with the location of the portal el continually changing as the props were being re-rendered as the colors were being updated.

// as soon as i use the attrs method the ---entrypatchcolor no-longer travels as a patch

const PortalPixel = styled.div.attrs((props) => ({
  style: {
    tops: props.top,
    left: props.left,
  },
}))`
  width: 25px;
  height: 25px;
  border: 1px inset white;
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: var(--entrypatch-color);
  -webkit-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  -moz-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  -ms-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  -o-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  &:hover {
    width: 25vw;
    height: 25vw;
    cursor: pointer;
  }
`;

// --entrypatch-color value is accurately being shared based on the changes in the parent Entryway.
// hypothetically, this means i should be able to keep all css in css accept where perhaps is used the reassignment of values in javascript, in the vanilla version.

// const createEl = () => {
//   //e.preventDefault();
//   var pixel = document.createElement("div");
//   pixel.className = "pixel";
//   pixel.classList.add("picnicPatch");
//   pixel.style.left = "100px"; //props.func("left");
//   pixel.style.top = "100px"; //props.func("top");
//   const container2 = document.querySelector(".cont");
//   container2.appendChild(pixel);
// };

const ranValMinMax = (min, max) => {
  return Math.random() * (max - min) + min;
};

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

export default function Portal(prop) {
  console.log(prop);
  //   createEl();
  var xPos = createPositions("top");
  var yPos = createPositions("left");

  return <PortalPixel left={yPos} top={xPos} onClick={prop.func}></PortalPixel>;
}
