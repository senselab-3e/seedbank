import React, { useEffect, useState } from "react";
import styled from "styled-components";

//const PixelPatch = styled.div`

//The rule of thumb is to use attrs when you want every instance of a styled component to have that prop, and pass props directly when every instance needs a different one:

const PixelPatch = styled.div.attrs((props) => ({
  style: {
    background: props.background,
    top: props.top,
    left: props.left,
  },
}))`
  position: absolute;
  width: 25px;
  height: 25px;
  cursor: pointer;
  -webkit-transition: width 7s, height 7s;
  -webkit-transition-timing-function: ease;
  transition: width 7s, height 7s;
  transition-timing-function: ease;
  &:hover {
    width: 600px;
    height: 600px;
  }
`;

//this was all moved in from the parent component Entryway - to keep the pixel component from re-rendering it's location all the time.

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

//this is an imperfect approach because it will always return the same location, even if the component is re-used.

var xPos = createPositions("top");
var yPos = createPositions("left");

//when i used this, because it was only passing down the left and top props, it no longer passed down the background color css --entrywayval
// const PixelPatch = styled.input.attrs(({ left, top }) => ({
//     left,
//     top,
//   }))`

// --entrypatch-color value is accurately being shared based on the changes in the parent Entryway.
// hypothetically, this means i should be able to keep all css in css accept where perhaps is used the reassignment of values in javascript, in the vanilla version.
export default function Pixel(prop) {
  const [pColor, setColor] = useState(prop.background);

  useEffect(() => {
    setColor(prop.background);
  }, [prop.background]);

  //... so. a lot of traditional patterns for setting of the onClick={(){thing}}... but since i was passing down a function as a prop, by calling it within another function it was an anonymous function being triggered rather then the prop function. i erroneously had onClick={() => prop.func}}
  return (
    <div>
      <PixelPatch
        // left={prop.left}
        // top={prop.top}
        top={xPos}
        left={yPos}
        background={pColor}
        onClick={prop.func}
      ></PixelPatch>
    </div>
  );
}
