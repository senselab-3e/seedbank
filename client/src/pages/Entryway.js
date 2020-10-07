import React, { useState, useEffect } from "react";
import "../style/entryway.css";
// import { createPositions } from "../helpers/Calculators";
import Pixel from "../components/entryway/Pixel";
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

export default function Entryway(props) {
  // eslint-disable-next-line
  const [mainBG, setColor] = useState(props.patchColor || "#f812c0");
  // eslint-disable-next-line
  const [animationMode, setMode] = useState("gradient-shift");
  useEffect(() => {
    setColor(props.patchColor);
  }, [props.patchColor]);

  useEffect(() => {
    console.log(`current mode has switched ${animationMode}`);
  }, [animationMode]);

  //NOTE: this is only here as a reminder for how to conditionally show different components - in the future
  function Background(props) {
    const num = props.paletteNum;
    if (num === "2") {
      return (
        <>
          <ContainerPalette colorMode={animationMode} width="2" />
          <ContainerPalette colorMode={animationMode} width="2" />
        </>
      );
    } else if (num === "3") {
      return (
        <>
          <ContainerPalette colorMode={animationMode} width="3" />
          <ContainerPalette colorMode={animationMode} width="3" />
          <ContainerPalette colorMode={animationMode} width="3" />
        </>
      );
    } else {
      return <ContainerPalette colorMode={animationMode} />;
    }
  }

  return (
    <Container>
      <ContainerPalette
        bgHex={mainBG}
        colorMode={animationMode}
        width={"50vh"}
      />
      <ContainerPalette
        bgHex={mainBG}
        colorMode={"hue-rotate"}
        width={"50vh"}
      />
      <Pixel bgHex={mainBG} setMode={setMode} />
    </Container>
  );
}
