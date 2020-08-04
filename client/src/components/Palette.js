import React, { useState } from "react";
// import "../style/00.css";

import styled from "styled-components";

const PaletteSlide = styled.div`
  cursor: crosshair;
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
//   sampleBlock = document.querySelector('#palette1');
//   sampleBlock2 = document.querySelector('#palette2');
//   const newWidthCube1 = newWidth + 'vw';
//   const newWidthCube2 = 100 - newWidth + 'vw';
//   sampleBlock.style.setProperty('width', newWidthCube1);
//   sampleBlock2.style.setProperty('width', newWidthCube2);

// }

export default function Palette(props) {
  const [paletteWidth, setWidth] = useState("20vw");

  const resetCubeWidth = (newWidth) => {
    setWidth(newWidth + "vw");
  };

  const getPosition = (e) => {
    //var parentPosition = getPosition(e.currentTarget);
    const xPosition = e.clientX;

    //const yPosition = e.clientY;
    const intViewportWidth = window.innerWidth;

    let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);
    // //calculate position as 100 - value so i can use it like a percentage val but with vw css
    // let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);
    resetCubeWidth(percentageWidth);
  };

  return (
    <div>
      <PaletteSlide
        width={paletteWidth}
        hue={props.hue}
        onClick={getPosition}
      ></PaletteSlide>
    </div>
  );
}
