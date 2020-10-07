import React, { useState, useEffect } from "react";
import "../style/entryway.css";
// import { createPositions } from "../helpers/Calculators";
import Pixel from "../components/entryway/Pixel";
import styled from "styled-components";

const checkThing = (mode) => {
  switch (mode) {
    // case "00":
    //   return "green";
    // case "01":
    //   return "yellow";
    // case "02":
    //   return "blue";
    // case "03":
    //   return "blue";
    case "gradient-shift":
      return "gradient-shift";
    case "hue-rotate":
      return "hue-rotate";
    default:
      return "none";
  }
};

const ContainerPalette = styled.div`
  --animationmode: hue-rotate;
  --color-mode: ${(props) => checkThing(props.colorMode)};
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: ${(props) => props.bgHex};
  animation: var(--color-mode) 45s linear infinite;
  height: 100vh;
  width: 100vw;
`;

const WhitePalette = styled.div`
  --animationmode: hue-rotate;
  padding-top: 8em;
  margin: 0em;
  z-index: -1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: ${(props) => checkThing(props.bgHex)};
  height: 100vh;
  width: 100vw;
`;

const SplitPalette = styled.div`
  --animationmode: hue-rotate;

  padding-top: 8em;
  margin: 0em;
  z-index: -1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: ${(props) => props.bgHex};
  height: 100vh;
  width: 100vw;
`;

export default function Entryway(props) {
  // eslint-disable-next-line
  const [mainBG, setColor] = useState(props.patchColor || "#f812c0");
  // eslint-disable-next-line
  const [currentMode, setMode] = useState("01");
  useEffect(() => {
    setColor(props.patchColor);
    // potentially, one solution to the css hue-rotate animation issue - where-in i need it to restart when a new color update for the background color is passed to it, is putting that animation in a seperate class that i add and remove at the instant that the colorprop changes
    //aka const thing = document.querylistSelect('target')
    //thing.classList.remove("run-animation");
  }, [props.patchColor]);

  useEffect(() => {
    console.log(`current mode has switched ${currentMode}`);
  }, [currentMode]);

  //NOTE: this is only hear to remember the logic if i want to set up some kind of timer-based call. but a css way of shifting the colors was found, so this is no longer needed for it's original purpose

  //   const [seconds, setSeconds] = useState(1);
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setSeconds(seconds + 1);
  //     }, 1000);
  //     // clearing interval
  //     return () => clearInterval(timer);
  //   });

  function Background(props) {
    const mode = props.currentMode;
    const animationMode = props.animationMode;
    if (mode === "01") {
      return <ContainerPalette bgHex={mainBG} colorMode={animationMode} />;
    } else if (mode === "02") {
      return <SplitPalette bgHex={"blue"} />;
    } else if (mode === "00") {
      return <WhitePalette bgHex={"00"} />;
    }
  }

  return (
    <>
      <Background currentMode={"01"} animationMode={"gradient-shift"} />

      <Pixel bgHex={mainBG} currentMode={currentMode} setMode={setMode} />
    </>
  );
}
