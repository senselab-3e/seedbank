import React, { useState } from "react";
import { HEXtoHSL } from "../helpers/HexConverter";

import styled from "styled-components";
// import "../style/00.css";

// import styled from "styled-components";
// import { HEXtoHSL, complimyHSL } from "../helpers/HexConverter";

// const createSlider = () => {
//     //e.preventDefault();
//     var slider = document.createElement("div");
//     slider.className = "slider";
//     slider.style.left = createPositions("left");
//     slider.style.top = createPositions("top");
//     console.log(momentaryColor);
//     slider.style.backgroundColor = currentHue();
//     //momentaryColor;
//     // slider.style.backgroundColor = bcolor;
//     slider.onclick = function () {
//       slider.classList.contains("sliderOpen")
//         ? slider.classList.remove("sliderOpen")
//         : slider.classList.add("sliderOpen");
//     };
//     const container = document.querySelector(".sliderContainer");
//     container.appendChild(slider);
//   };
const PaletteSlide = styled.div.attrs((props) => ({
  style: {
    backgroundColor: `hsl(${props.color})`,
    width: props.width,
    top: props.top,
    left: props.left,
  },
}))`
func:${(props) => props.func}
  cursor: crosshair;
  height: 100vh;
  
  //--hsl: hsl(var(--h), var(--s), var(--l));
  //background-color: var(--hsl);
  
  -webkit-transition: width 3s;
  -moz-transition: width 3s;
  -ms-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  padding: 0em;
  margin: 0em;
`;

export default function Slider(props) {
  //const [sliderColor, setColor] = props.color;
  console.log(props.color.s, "slider level");
  const [colorSlide, setColor] = useState(
    `hsl(${props.color.h}, ${props.color.s},${props.color.l})`
  );
  const sliderStyling = {
    background: colorSlide,
  };

  return <div className="slider hel" style={sliderStyling}></div>;
}
