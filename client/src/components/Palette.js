import React, { useEffect, useState, useRef } from "react";
// import "../style/00.css";

import styled, { keyframes } from "styled-components";
import { HEXtoHSL, complimyHSL } from "../helpers/HexConverter";
//import { ArrayOptions } from "../helpers/ArrayOptions"; //just here to test

const colorScroll = keyframes`
    0% {
        background-color: var(--hsl);
    }

    30% {
        background-color: var(--inversehsl);
    }

    40% {
        background-color: var(--hsl);
    }

    70% {
        background-color: var(--inversehsl);
    }

    95% {
      background-color: var(--hsl);
    }
}`;
const PaletteSlide = styled.div`
  cursor: crosshair;
  whichpallete: ${(props) => props.className};
  width: ${(props) => props.width};
  height: 100vh;
  --h: ${(props) => props.hue.h};
  --s: ${(props) => props.hue.s};
  --l: ${(props) => props.hue.l};
  --hsl: hsl(var(--h), var(--s), var(--l));
  --inverseh: ${(props) => props.inverse.h};
  --inverses: ${(props) => props.inverse.s};
  --inversel: ${(props) => props.inverse.l};
  --inversehsl: hsl(var(--inverseh), var(--inverses), var(--inversel));
  background-color: var(--hsl);
  // -webkit-animation: ${colorScroll} 60s infinite;
  // animation: ${colorScroll} 60s infinite;
  -webkit-transition: width 3s;
  -moz-transition: width 3s;
  -ms-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  padding: 0em;
  margin: 0em;
`;

export default function Palette(props) {
  // console.log(window.innerWidth);
  const [pWidth1, setWidth] = useState("50vw");
  const [pWidth2, setWidth2] = useState("50vw");

  // console.log(props.hex);

  const resetCubeWidth = (newWidth, target) => {
    setWidth(newWidth + "vw");
    setWidth2(100 - newWidth + "vw");
    //if i want to set up a scerio where
    // if (target === "pWidth1") {
    //   setWidth(newWidth + "vw");
    //   setWidth2(100 - newWidth + "vw");
    // } else if (target === "pWidth2") {
    //   setWidth2(newWidth + "vw");
    //   setWidth(100 - newWidth + "vw");
    // }
  };

  const getPosition = (e) => {
    const target = e.target.id;
    const xPosition = e.clientX;
    const intViewportWidth = window.innerWidth;

    let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);

    // //calculate position as 100 - value so i can use it like a percentage val but with vw css
    // let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);

    resetCubeWidth(percentageWidth, target);
  };

  let hexHsl = HEXtoHSL(props.hex);
  //complimentary color generator to match the current colorpicker set by the input val
  let hexHslComp = complimyHSL(hexHsl);

  // console.log(hexHsl.h, "apples");
  //const [p1Color, setColor] = useState(hexHsl);
  const [p1Color, setColor] = useState(hexHsl);
  const [p2Color, setColor2] = useState(hexHslComp);
  //const [seconds, setSeconds] = useState(1);

  let mult = 1;

  //this is a new hook type --- if i were using mult, it would be reset to 1, at each re-render. // aka not work the way i'd think
  //it would within regular javascript. but in react the useRef() Hook isn’t just for DOM refs (side-effects). The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.
  //by utalizing the '.current' on my Ref, within the useEffect hook it will look at the value of that instance within the hook and not its continually reset value at 1
  const refContainer = useRef(mult);

  useEffect(() => {
    if (p1Color.h === 0) {
      refContainer.current = 1;
    }
    if (p1Color.h === 360) {
      refContainer.current = -1;
    }

    var updateVal = {
      h: (p1Color.h += refContainer.current),
      s: p1Color.s,
      l: p1Color.l,
    };

    const timer = setInterval(() => {
      setColor(updateVal);
    }, 100);
    // clearing interval
    return () => clearInterval(timer);
  });

  return (
    // <div className="paletteContainer">
    <>
      <PaletteSlide
        id="pWidth1"
        width={pWidth1}
        inverse={p2Color}
        hue={p1Color}
        onClick={getPosition}
      ></PaletteSlide>
      <PaletteSlide
        id="pWidth2"
        width={pWidth2}
        inverse={p1Color}
        hue={p2Color}
        onClick={getPosition}
      ></PaletteSlide>
    </>
    // </div>
  );
}
