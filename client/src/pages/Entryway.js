import React, { useState } from "react";
import "../style/00.css";
//import styled, { keyframes } from "styled-components";
import styled from "styled-components";
import Pixel from "../components/Pixel";
import Palettes from "../components/Palettes";
//import Container from "../components/Container";
// import Portal from "../components/Portal";
//import { HEXtoHSL } from "../helpers/HexConverter";

const InputColor = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
`;

//const xpos = ranValMinMax(); // by doing it this way, rather then having xpos be a function (as is seen in num) - i prevent that value from being called repeatedly, each time the components re-render. this would cause the position to change continually. but maybe i want that.

const ranValMinMax = (min, max) => {
  return Math.random() * (max - min) + min;
};

const createPositions = (dim) => {
  let num = "";
  switch (dim) {
    case "top":
      num = ranValMinMax(100, window.innerHeight - 100);
      num += "px";
      break;
    case "left":
      num = ranValMinMax(100, window.innerWidth - 100);
      num += "px";
      break;
    default:
      num = ranValMinMax(100, window.innerHeight - 100);
      num += "px";
  }
  return num;
};

//this is a variable I later accumulatively add to +1 to, on each palette click, creating a num val later passed as a prop to the container and child slider component.
let numSliders = 0;

export default function Entryway() {
  //when i left the state blank '' - it would cause problems for the delegation of its value as a prop for the styled components
  const [bcolor, setColor] = useState("#f812c0");
  // const [sliderComp, setSliders] = useState();
  const [sliderColor, setSliderColor] = useState(
    '{h: 317, s: "94%", l: "52%"}'
  );
  //amount of sliders
  const [amt, setAmount] = useState(0);

  // const [portalnum, setPorts] = useState(0);

  //  How do I update state with values that depend on the current state?
  // Pass a function instead of an object to setState to ensure the call always uses the most updated version of state (see below).

  // const addPortals = () => setPorts(portalnum + 1);

  // const addPortals = (e) => {
  //   e.preventDefault();
  //   setPorts(portalnum + 1);
  // };

  //another, non component based approach. this function can be passed into func= of pixel or portal component. just different approaches.
  const createEl = (e) => {
    e.preventDefault();
    var pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.classList.add("picnicPatch");
    pixel.style.left = createPositions("left");
    pixel.style.top = createPositions("top");
    // pixel.style.backgroundColor = bcolor;
    pixel.onclick = createEl;
    const container = document.querySelector(".containerPalette");
    container.appendChild(pixel);
  };

  //didn't end up needing this because of hooks -- but stashing in case it proves helpful for passing up and down values later.
  // let momentaryColor = {}; // this ulimately gets assigned to hsl values, in an {} form. eventually contains h, s, l key value pairs when capturing color information, from child component palette1
  // //NOTE: returning an hsl val of the current palette1 color, as it's scrolling. so this is happening quite continuously
  // const currentColor = (val) => {
  //   //momentaryColor = val;
  // };

  const requestNewSlider = (color) => {
    //caps the number of sliders you can add at 30.
    numSliders < 40 ? (numSliders += 1) : (numSliders = 1);
    setAmount(numSliders); // sets the hook value for the num of sliders --- > amt ---> which is then passed down to child components.
    setSliderColor(color); // sets hook for color value passed to slider // this originates from a callback function that was passed to the palette component, which grabs the current hook value, an hsl color value, for palette 1 - within the current phase of its scrolling color value. that value is being passed up to the parent component through the func passed down to it
  };

  // I originally had the container and slicepalettes at the entryway level, but later nested them within Palettes
  return (
    <div className="containerPalette">
      <Pixel func={createEl} background={bcolor}></Pixel>
      <InputColor>
        <p>{bcolor}</p>
        <input
          className="inputColor"
          type="color"
          defaultValue={bcolor}
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </InputColor>
      <Palettes
        bgHex={bcolor}
        amtSliders={amt}
        indivColor={sliderColor}
        funcAddSlider={requestNewSlider}
      ></Palettes>
    </div>
  );
}
