import React, { useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import DataRequest from "./DataRequest";

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
  const [firstPalWidth, setfirstWidth] = useState(100 / props.paletteNum); //this is set to a default of the 100/palettNum, in the parent component
  const [lastPalWidth, setlastWidth] = useState(100 / props.paletteNum);

  console.log(numDivPal, firstPalWidth);
  const animationMode = props.animationMode;
  let animationModeAlt = checkAniMode(animationMode);

  const [dataList, setDataList] = useState([]);

  //callback function for all axios retrieved db objects that isn't currently being used for anything
  const dataRetrieve = (val) => {
    setDataList(val);
    console.log("PARENT LEVEL DB res", val);
  };

  const getClickPos = (e) => {
    //e.preventDefault();
    console.log("clicking");
    const xPosition = e.clientX;
    const intViewportWidth = window.innerWidth;
    let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);
    setfirstWidth(percentageWidth); // these 2 values are being passed to the Background component. the first is the palette 1 width and the second is the palette 2 width (palette 1 - 100)
    setlastWidth(100 - percentageWidth);
  };

  //Below only works if there are only 2 potentional animation choices but it's more clear writing things here

  //this is if i ever wanted to increase the number of large color palettes.
  let palettes = [];
  for (let num = 2; num < numDivPal; num++) {
    palettes.push(
      <ContainerPalette
        key={num}
        bgHex={props.mainBG}
        colorMode={animationMode}
        width={5 + "vw"}
      ></ContainerPalette>
    );
  }

  return (
    <>
      <ContainerPalette
        key={1}
        bgHex={props.mainBG}
        colorMode={animationMode}
        width={firstPalWidth + "vw"}
        onClick={getClickPos}
      ></ContainerPalette>
      <DataRequest pathway="sliderTexts" dataRetrieve={dataRetrieve} />
      xd
      <Slider dataList={dataList}></Slider>
      <ContainerPalette
        key={2}
        bgHex={props.mainBG}
        colorMode={animationModeAlt}
        width={lastPalWidth + "vw"}
        onClick={getClickPos}
      ></ContainerPalette>
      {palettes}
    </>
  );
}
