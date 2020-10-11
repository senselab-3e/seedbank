import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SlideText from "./SlideText";
import Slider from "./Slider";

const ContainerPalette = styled.div.attrs((props) => ({
  style: {
    background: props.bgHex,
  },
}))`
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
  padding-top: 2em;
  margin: 0em;
  z-index: -1;
  
  animation: var(--color-mode) 45s linear infinite;
  height: 100vh;
  width: ${(props) => props.width};
  -webkit-transition: width 3s;
  -moz-transition: width 3s;
  -ms-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
`;

const checkAniMode = (mode) => {
  if (mode === "gradient-shift") {
    return "hue-rotate";
  } else {
    return "gradient-shift";
  }
};

export default function Background(props) {
  const numDivPal = props.paletteNum; // || 1; // number of palettes divided by 100 = indiv width of each palette in the total view port
  const animationMode = props.animationMode;
  let animationModeAlt = checkAniMode(animationMode);
  const [firstPalWidth, setfirstWidth] = useState(props.clickPos); //this is set to a default of the 100/palettNum, in the parent component
  const [lastPalWidth, setlastWidth] = useState(props.clickPosInv);

  useEffect(() => {
    setfirstWidth(props.clickPos);
  }, [props.clickPos]);

  useEffect(() => {
    setlastWidth(props.clickPosInv);
  }, [props.clickPosInv]);

  //callback function for all axios retrieved db objects that isn't currently being used for anything
  //   const alltheThings = (val) => {
  //     console.log(val);
  //   };

  //Below only works if there are only 2 potentional animation choices but it's more clear writing things here

  //this is if i ever wanted to increase the number of large color palettes.
  let palettes = [];
  for (let num = 2; num < numDivPal; num++) {
    //only adjust width of palette if more then on is in the field.
    //   if (numDivPal > 1) {
    //     if (num === 0 && props.clickPos) widthPalette = props.clickPos;
    //     if (num === numDivPal-1 && props.clickPosInv) widthPalette = props.clickPosInv;
    //   }
    //   num % 2 === 0
    //     ? (colorMode = animationMode)
    //     : (colorMode = animationModeAlt); /// can also be set to 'none'. this is more for the visual purpose of differentiating each added palette. but will become more useful as i add and customize variance in the palette css
    palettes.push(
      <ContainerPalette
        key={num}
        bgHex={props.mainBG}
        colorMode={animationMode}
        width={5 + "vw"}
      ></ContainerPalette>
    );
  }

  //console.log(things);

  return (
    <>
      <ContainerPalette
        key={1}
        bgHex={props.mainBG}
        colorMode={animationMode}
        width={firstPalWidth + "vw"}
      ></ContainerPalette>
      <Slider paletteNum={props.paletteNum}></Slider>
      <ContainerPalette
        key={2}
        bgHex={props.mainBG}
        colorMode={animationModeAlt}
        width={lastPalWidth + "vw"}
      ></ContainerPalette>
      {palettes}
    </>
  );
}
