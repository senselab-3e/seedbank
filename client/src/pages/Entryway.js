import React, { useState, useEffect } from "react";
import "../style/entryway.css";
// import { createPositions } from "../helpers/Calculators";
import Pixel from "../components/entryway/Pixel";
import Background from "../components/entryway/Background";
import styled from "styled-components";

const Container = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  padding: 0;
  margin: 0;
`;

export default function Entryway(props) {
  // eslint-disable-next-line
  const [mainBG, setColor] = useState(props.patchColor || "#f812c0");
  // eslint-disable-next-line
  const [animationMode, setAniMode] = useState("gradient-shift");

  const [paletteNum, setPalNum] = useState(2); // this is being passed down to Pixel component, as well as Background, for when a click on a pixel element causes a palette to be added to the view.

  //   const [clickPos, setPos] = useState(100 / paletteNum); //this is set to this amount so that it loads the palette slices at center, with the bookend enlarged Palettes in the Background component

  //   const [clickPosInv, setPosInv] = useState(100 / paletteNum);

  useEffect(() => {
    setColor(props.patchColor);
  }, [props.patchColor]);

  ////NOTE: this is only here to double check to check the animation Mode that is being passed down as a prop
  //   useEffect(() => {
  //     console.log(`current mode has switched ${animationMode}`);
  //   }, [animationMode]);

  //NOTE: this is only here to double check the x-axis position for the mouse click being passed down to the Background component
  //   useEffect(() => {
  //     console.log(clickPos, clickPosInv);
  //   }, [clickPos, clickPosInv]);

  //   const getClickPos = (e) => {
  //     const xPosition = e.clientX;
  //     const intViewportWidth = window.innerWidth;
  //     let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);
  //     setPos(percentageWidth); // these 2 values are being passed to the Background component. the first is the palette 1 width and the second is the palette 2 width (palette 1 - 100)
  //     setPosInv(100 - percentageWidth);
  //   };

  //onClick={getClickPos}  // by having this at such a top level, its causing all the props on child components to re-render - aka change the colors on all the mini sliders... which is not desired.

  return (
    <Container>
      <Background
        paletteNum={paletteNum}
        animationMode={animationMode}
        mainBG={mainBG}
      />

      <Pixel
        bgHex={mainBG}
        setAniMode={setAniMode}
        paletteNum={paletteNum}
        setPalNum={setPalNum}
      />
    </Container>
  );
}
