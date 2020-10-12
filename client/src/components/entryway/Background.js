import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import DataRequest from "./DataRequest";
import { GetPosition } from "../../helpers/Calculators";

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
  const [elNum, setElNum] = useState(props.paletteNum); //
  const [firstPalWidth, setfirstWidth] = useState(100 / props.paletteNum); //this is set to a default of the 100/palettNum, in the parent component
  const [lastPalWidth, setlastWidth] = useState(100 / props.paletteNum);

  const animationMode = props.animationMode;
  let animationModeAlt = checkAniMode(animationMode);

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setElNum(props.paletteNum);
  }, [props.paletteNum]);

  //callback function for all axios retrieved db objects that isn't currently being used for anything
  const dataRetrieve = (val) => {
    setDataList(val);
  };

  //this shifts the position of all the palettes and sliders relative to where the user clicks on view
  const getClickPos = (e) => {
    const xPosRelative = GetPosition(e);
    setfirstWidth(xPosRelative.leftSide);
    setlastWidth(xPosRelative.rightSide);
  };

  //CURRENTLY being triggered by clicking on Pixel component, but purely for backpocket testing purposes. future iterations i'll likely want to add more then 2 color palettes, so this i just being written ahead of time.
  //this is if i ever wanted to increase the number of large color palettes.
  let palettes = [];
  for (let num = 2; num < elNum; num++) {
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
