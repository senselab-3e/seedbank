import React, { useState } from "react";
// import "../style/00.css";

import styled from "styled-components";

const PaletteSlide = styled.div`
  cursor: crosshair;
  whichpallete: ${(props) => props.className};
  width: ${(props) => props.width};
  height: 100vh;
  --h: ${(props) => props.hue};
  --s: 48%;
  --l: 50%;
  --hsl: hsl(var(--h), var(--s), var(--l));
  background-color: var(--hsl);
  -webkit-transition: width 3s;
  -moz-transition: width 3s;
  -ms-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
`;

// const resetCubeWidth = (newWidth) => {

//   const newWidthCube1 = newWidth + 'vw';
//   const newWidthCube2 = 100 - newWidth + 'vw';
//   sampleBlock.style.setProperty('width', newWidthCube1);
//   sampleBlock2.style.setProperty('width', newWidthCube2);

// }

export default function Palette(props) {
  const [pWidth1, setWidth] = useState("50vw");
  const [pWidth2, setWidth2] = useState("50vw");

  const resetCubeWidth = (newWidth, target) => {
    setWidth(newWidth + "vw");
    setWidth2(100 - newWidth + "vw");
    //if i want to set up a scerio where
    // if (target === "pWidth1") {
    //   setWidth(newWidth + "vw");
    //   setWidth2(100 - newWidth + "vw");
    // } else if (target === "pWidth2") {
    //   setWidth2(newWidth + "vw");
    //   setWidth(100 - newWidth + "vw");
    // }
  };

  const getPosition = (e) => {
    const target = e.target.id;
    const xPosition = e.clientX;
    const intViewportWidth = window.innerWidth;

    let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);

    // //calculate position as 100 - value so i can use it like a percentage val but with vw css
    // let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);

    resetCubeWidth(percentageWidth, target);
  };

  return (
    <div className="paletteContainer ">
      <PaletteSlide
        id="pWidth1"
        width={pWidth1}
        hex={props.hex}
        hue={props.hue + 100}
        onClick={getPosition}
      ></PaletteSlide>
      <PaletteSlide
        id="pWidth2"
        width={pWidth2}
        hex={props.hex}
        hue={props.hue}
        onClick={getPosition}
      ></PaletteSlide>
    </div>
  );
}
