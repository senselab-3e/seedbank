import React, { useState } from "react";
import "../style/entryway.css";
import { createPositions } from "../helpers/Calculators";
import styled from "styled-components";

export default function Entryway() {
  // eslint-disable-next-line
  const [bcolor, setColor] = useState("#f812c0");
  const [sliderColor, setSliderColor] = useState(
    '{h: 317, s: "94%", l: "52%"}'
  );
  const [amt, setAmount] = useState(0);
  return <div className="containerPalette"> adfds</div>;
}
