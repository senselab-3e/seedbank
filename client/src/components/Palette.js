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

  const [p1Color, setColor] = useState(HEXtoHSL(props.hex));
  const [p2Color, setColor2] = useState(props.hex);
  // let something = "a";

  // const updateHook = (props) => {
  //   // p1Color !== HEXtoHSL(props.hex)
  //   //   ? console.log("changed")
  //   //   : (something = "b");

  //   console.log(HEXtoHSL(props.hex), p1Color);
  // };

  //updateHook(props);

  //both of the above - the reference to a function converting the prop, and the direct prop are both
  //updating at the moment the colorpick input is triggered.
  //the hook however, is NOT updating with the props value.
  console.log(
    "converted:",
    hexHsl.h,
    "original prop:",
    props.hex,
    "hook:",
    p1Color.h
  );

  //the useRef hook can also be used to store a mutable variable
  //*********that will not trigger an update of the component when changed. --> so refHex = useRef(hexHsl) is NOT what i want because i do want it to trigger a render // but it IS useful for within my useeffect for the var value

  let mult = 1;
  const refContainer = useRef(mult);
  //var colorStatus = useRef(hexHsl.h);// using this yields the same results as using p1Color.h in the updateVal function below
  //this is a new hook type --- if i were using mult, it would be reset to 1, at each re-render. // aka not work the way i'd think
  //it would within regular javascript. but in react the useRef() Hook isn’t just for DOM refs (side-effects). The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.
  //by utalizing the '.current' on my Ref, within the useEffect hook it will look at the value of that instance within the hook and not its continually reset value at 1

  ///Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.
  //---->>>

  // useEffect(() => {
  //   if (p1Color.h === 0) {
  //     refContainer.current = 1;
  //   }
  //   if (p1Color.h === 360) {
  //     refContainer.current = -1;
  //   }

  //   // if (hexHsl.h + 1 !== p1Color.h || hexHsl.h - 1 !== p1Color.h) {
  //   //   setColor(HEXtoHSL(props.hex));
  //   // }

  //   //this version updates the shifts in the color, but not the latest color picker value.
  //   var updateVal = {
  //     h: (p1Color.h += refContainer.current), // within the context of just this - the refColor works, but it's not updating with the latest prop hex value. the current stays with the originally assigned value
  //     s: p1Color.s,
  //     l: p1Color.l,
  //   };

  //   const timer = setInterval(() => {
  //     setColor(updateVal);
  //   }, 1000);
  //   // clearing interval
  //   return () => clearInterval(timer);
  // });

  //---->
  // this is now updating the value of the color, to the palette components.
  useEffect(() => {
    setColor(HEXtoHSL(props.hex));
  }, [props.hex]);

  return (
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
  );
}
