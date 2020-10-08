import React from "react";
import styled from "styled-components";

// for some reason, when i try to pass var(--colorPickColor) to background color, it stops working....
const ContainerPalette = styled.div`
--colorPickColor : ${(props) => props.bgHex}
  --animationmode: hue-rotate;
  --color-mode: ${(props) => props.colorMode};
  @keyframes hue-rotate {
    from {
      -webkit-filter: hue-rotate(0);
      -moz-filter: hue-rotate(0);
      -ms-filter: hue-rotate(0);
      filter: hue-rotate(0);
    }
    to {
      -webkit-filter: hue-rotate(360deg);
      -moz-filter: hue-rotate(360deg);
      -ms-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
  @keyframes gradient-shift {
    0% {
      background-color: --var(--colorPickColor);
    }
    50% {
      background-color: #ffffff;
    }
    100% {
      background-color: --var(--colorPickColor);
    }
  }
  padding-top: 8em;
  margin: 0em;
  z-index: -1;
  background-color: ${(props) => props.bgHex};
  animation: var(--color-mode) 45s linear infinite;
  height: 100vh;
  width: ${(props) => props.width};
  -webkit-transition: width 3s;
  -moz-transition: width 3s;
  -ms-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
`;

export default function Background(props) {
  const numDivPal = props.paletteNum || 1; // number of palettes divided by 100 = indiv width of each palette in the total view port
  const animationMode = props.animationMode;
  let palettes = [];
  let colorMode = ""; // sole color value passed to Container Pallete
  let animationModeAlt = ""; // container for alt switch modes so each palette can be visually differentiated by the css anmiation applied to it

  let widthPalette = 100 / numDivPal; ///this is the width if not factoring in a width set by where the user clicks in the overall background view. this will be updated based on the pixel clicks - via the pixel component. each click on this component adds a new palette, under a limit of 10.

  //Below only works if there are only 2 potentional animation choices but it's more clear writing things here
  animationMode === "gradient-shift"
    ? (animationModeAlt = "hue-rotate")
    : (animationModeAlt = "gradient-shift");

  for (let num = 0; num < numDivPal; num++) {
    //only adjust width of palette if more then on is in the field.
    if (numDivPal > 1) {
      if (num === 0 && props.clickPos) widthPalette = props.clickPos;
      if (num === 1 && props.clickPosInv) widthPalette = props.clickPosInv;
    }
    num % 2 === 0
      ? (colorMode = animationMode)
      : (colorMode = animationModeAlt); /// can also be set to 'none'. this is more for the visual purpose of differentiating each added palette. but will become more useful as i add and customize variance in the palette css

    palettes.push(
      <ContainerPalette
        key={num}
        bgHex={props.mainBG}
        colorMode={colorMode}
        width={widthPalette + "vh"}
      />
    );
  }

  return <>{palettes}</>;
}
