import React, { useState } from "react";
// import "../style/00.css";

import styled from "styled-components";
import { HEXtoHSL, complimyHSL } from "../helpers/HexConverter";
//import { ArrayOptions } from "../helpers/ArrayOptions"; //just here to test
const PaletteSlide = styled.div`
  cursor: crosshair;
  whichpallete: ${(props) => props.className};
  width: ${(props) => props.width};
  height: 100vh;
  --h: ${(props) => props.hue.h};
  --s: ${(props) => props.hue.s};
  --l: ${(props) => props.hue.l};
  --hsl: hsl(var(--h), var(--s), var(--l));
  background-color: var(--hsl);
  -webkit-transition: width 3s;
  -moz-transition: width 3s;
  -ms-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
`;

export default function Palette(props) {
  const [pWidth1, setWidth] = useState("50vw");
  const [pWidth2, setWidth2] = useState("50vw");

  console.log(props.hex);

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

  const hexHsl = HEXtoHSL(props.hex);
  //complimentary color generator to match the current colorpicker set by the input val
  const hexHslComp = complimyHSL(hexHsl);

  return (
    <div className="paletteContainer ">
      <PaletteSlide
        id="pWidth1"
        width={pWidth1}
        hex={hexHsl}
        hue={hexHsl}
        onClick={getPosition}
      ></PaletteSlide>
      <PaletteSlide
        id="pWidth2"
        width={pWidth2}
        hex={hexHslComp}
        hue={hexHslComp}
        onClick={getPosition}
      ></PaletteSlide>
    </div>
  );
}
