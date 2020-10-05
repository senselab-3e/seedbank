import React, { useState } from "react";
import "../style/entryway.css";
// import { createPositions } from "../helpers/Calculators";
import styled from "styled-components";
//import ColorPicker from "../components/ColorPicker";

const InputColor = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
`;

export default function Entryway(props) {
  // eslint-disable-next-line
  const [bcolor, setColor] = useState(props.patchColor || "#f812c0");
  //   const [sliderColor, setSliderColor] = useState(
  //     '{h: 317, s: "94%", l: "52%"}'
  //   );
  //const [amt, setAmount] = useState(0);
  return (
    <div className="containerPalette">
      {/* <InputColor>
        <p> {bcolor} </p>
        <input
          className="inputColor"
          type="color"
          defaultValue={bcolor}
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </InputColor> */}
    </div>
  );
}
