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

  const [paletteNum, setPalNum] = useState(1); // this is being passed down to Pixel component, as well as Background, for when a click on a pixel element causes a palette to be added to the view.

  const [clickPos, setPos] = useState(null);

  const [clickPosInv, setPosInv] = useState(null);

  useEffect(() => {
    setColor(props.patchColor);
  }, [props.patchColor]);

  useEffect(() => {
    console.log(`current mode has switched ${animationMode}`);
  }, [animationMode]);

  useEffect(() => {
    console.log(clickPos, clickPosInv);
  }, [clickPos, clickPosInv]);

  const getClickPos = (e) => {
    //const target = e.target.className;
    const xPosition = e.clientX;
    const intViewportWidth = window.innerWidth;
    let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);
    setPos(percentageWidth);
    setPosInv(100 - percentageWidth);
    // //calculate position as 100 - value so i can use it like a percentage val but with vw css
    // resetPaletteW(percentageWidth, target);
  };

  return (
    <Container onClick={getClickPos}>
      <Background
        paletteNum={paletteNum}
        animationMode={animationMode}
        mainBG={mainBG}
        clickPos={clickPos}
        clickPosInv={clickPosInv}
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
