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
  const [animationMode, setAniMode] = useState("hue-rotate");

  const [paletteNum, setPalNum] = useState(2); // this is being passed down to Pixel component, as well, for when a click on a pixel element causes a palette to be added to the view.

  useEffect(() => {
    setColor(props.patchColor);
  }, [props.patchColor]);

  useEffect(() => {
    console.log(`current mode has switched ${animationMode}`);
  }, [animationMode]);

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
