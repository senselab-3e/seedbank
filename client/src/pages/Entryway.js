import React, { useState, useEffect } from "react";
import "../style/entryway.css";
// import { createPositions } from "../helpers/Calculators";
import Pixel from "../components/entryway/Pixel";
import styled from "styled-components";

const ContainerPalette = styled.div`
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
  padding-top: 8em;
  margin: 0em;
  z-index: -1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: ${(props) => props.bgHex};
  animation: hue-rotate 45s linear infinite;
  height: 100vh;
  width: 100vw;
`;

export default function Entryway(props) {
  // eslint-disable-next-line
  const [bcolor, setColor] = useState(props.patchColor || "#f812c0");
  //   const [sliderColor, setSliderColor] = useState(
  //     '{h: 317, s: "94%", l: "52%"}'
  //   );
  //const [amt, setAmount] = useState(0);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    setColor(props.patchColor);
  }, [props.patchColor]);

  //NOTE: this is only hear to remember the logic if i want to set up some kind of timer-based call. but a css way of shifting the colors was found, so this is no longer needed for it's original purpose
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setSeconds(seconds + 1);
  //     }, 1000);
  //     // clearing interval
  //     return () => clearInterval(timer);
  //   });

  return (
    <ContainerPalette bgHex={bcolor}>
      <p>{seconds}</p>
      <Pixel bgHex={bcolor} />
    </ContainerPalette>
  );
}
