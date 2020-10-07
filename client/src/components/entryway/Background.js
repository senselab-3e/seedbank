import React from "react";
import styled from "styled-components";

const ContainerPalette = styled.div`
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
      background-color: ${(props) => props.bgHex};
    }
    50% {
      background-color: #ffffff;
    }
    100% {
      background-color: ${(props) => props.bgHex};
    }
  }
  padding-top: 8em;
  margin: 0em;
  z-index: -1;
  background-color: ${(props) => props.bgHex};
  animation: var(--color-mode) 45s linear infinite;
  height: 100vh;
  width: ${(props) => props.width};
`;

export default function Background(props) {
  const numDivPal = props.paletteNum || 1; // number of palettes divided by 100 = indiv width of each palette in the total view port
  const animationMode = props.animationMode;
  let palettes = [];
  let colorMode = ""; // sole color value passed to Container Pallete
  let animationModeAlt = ""; // container for alt switch modes so each palette can be visually differentiated by the css anmiation applied to it

  //Below only works if there are only 2 potentional animation choices but it's more clear writing things here
  animationMode === "gradient-shift"
    ? (animationModeAlt = "hue-rotate")
    : (animationModeAlt = "gradient-shift");

  for (let num = 0; num < numDivPal; num++) {
    num % 2 === 0
      ? (colorMode = animationMode)
      : (colorMode = animationModeAlt); /// can also be set to 'none'. this is more for the visual purpose of differentiating each added palette. but will become more useful as i add and customize variance in the palette css
    palettes.push(
      <ContainerPalette
        key={num}
        bgHex={props.mainBG}
        colorMode={colorMode}
        width={100 / numDivPal + "vh"}
      />
    );
  }

  return <>{palettes}</>;
}
