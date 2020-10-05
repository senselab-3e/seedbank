import React, { useState, useEffect } from "react";
import "../style/entryway.css";
// import { createPositions } from "../helpers/Calculators";
import styled from "styled-components";

const ContainerPalette = styled.div`
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
  const [bcolor, setColor] = useState(props.patchColor || "#f812c0");
  //   const [sliderColor, setSliderColor] = useState(
  //     '{h: 317, s: "94%", l: "52%"}'
  //   );
  //const [amt, setAmount] = useState(0);

  useEffect(() => {
    setColor(props.patchColor);
  }, [props.patchColor]);

  return <ContainerPalette bgHex={bcolor}></ContainerPalette>;
}
