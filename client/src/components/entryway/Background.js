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
  const numDivPal = props.paletteNum || 1;
  const animationMode = props.animationMode;
  let palettes = [];
  let colorModeAlt = ""; // this allows for if 2+ palettes are side by side they won't all have the exact same animation mode, so you can visually see their difference.

  for (let num = 0; num < numDivPal; num++) {
    num % 2 === 0
      ? (colorModeAlt = animationMode)
      : (colorModeAlt = "gradient-shift"); /// can also be set to 'none'. this is more for the visual purpose of differentiating each added palette. but will become more useful as i add and customize variance in the palette css
    palettes.push(
      <ContainerPalette
        key={num}
        bgHex={props.mainBG}
        colorMode={colorModeAlt}
        width={100 / numDivPal + "vh"}
      />
    );
  }

  return <>{palettes}</>;
}
