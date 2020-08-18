import React, { useEffect, useState, useRef } from "react";
// import "../style/00.css";

import styled, { keyframes } from "styled-components";
import { HEXtoHSL, complimyHSL, scrollHSL } from "../helpers/HexConverter";
//import { ArrayOptions } from "../helpers/ArrayOptions"; //just here to test

const colorScroll = keyframes`
    0% {
        background-color: var(--hsl);
    }
    50% {
        background-color: var(--inverseHsl);
    }
    95% {
      background-color: var(--hsl);
    }
}`;

//unfortunately the -- trips up the script in the attr object section and i need the -- to be present for the traditional css vars.
// h: props.hue.h,
// s: props.hue.s,
// l: props.hue.l,
// --inverseh: props.inverse.h,
// --inverses: props.inverse.s,
// --inversel: props.inverse.l,

const PaletteSlide = styled.div.attrs((props) => ({
  style: {
    width: props.width,
    top: props.top,
    left: props.left,
  },
}))`
func:${(props) => props.func}
  cursor: crosshair;
  height: 100vh;
  --h: ${(props) => props.hue.h};
  --s: ${(props) => props.hue.s};
  --l: ${(props) => props.hue.l};
  --inverseh: props.hue2.h,
--inverses: props.hue2.s,
--inversel: props.hue2.l,
--inverseHsl: hsl(var(--inverseh), var(--inverses), var(--inversel));
  --hsl: hsl(var(--h), var(--s), var(--l));
  background-color: var(--hsl);
  //  -webkit-animation: ${colorScroll} 60s infinite;
  //  animation: ${colorScroll} 60s infinite;
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
    console.log(p1Color); // this value does apear to be changing....
    props.func(p1Color); // seems to be retreiving the color at the right moment...
    props.func2(e.clientX); // this is to create the new slider element // this is messsyyy. better to separating everything out.
    //props.func3(p1Color);
  };

  const addSliderComp = () => {
    props.func3(p1Color);
  };

  let hexHsl = HEXtoHSL(props.hex);
  //complimentary color generator to match the current colorpicker set by the input val
  //let hexHslComp = complimyHSL(hexHsl);

  const [p1Color, setColor] = useState(HEXtoHSL(props.hex));
  const [p2Color, setColor2] = useState(complimyHSL(hexHsl));
  const [p3Color, setColor3] = useState(scrollHSL(hexHsl));
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
  // console.log(
  //   "converted:",
  //   hexHsl.h,
  //   "original prop:",
  //   props.hex,
  //   "hook:",
  //   p1Color.h
  // );

  //the useRef hook can also be used to store a mutable variable
  //*********that will not trigger an update of the component when changed. --> so refHex = useRef(hexHsl) is NOT what i want because i do want it to trigger a render // but it IS useful for within my useeffect for the var value

  let mult = 1;
  const refContainer = useRef(mult);
  //var colorStatus = useRef(hexHsl.h);// using this yields the same results as using p1Color.h in the updateVal function below
  //this is a new hook type --- if i were using mult, it would be reset to 1, at each re-render. // aka not work the way i'd think
  //it would within regular javascript. but in react the useRef() Hook isn’t just for DOM refs (side-effects). The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.
  //by utalizing the '.current' on my Ref, within the useEffect hook it will look at the value of that instance within the hook and not its continually reset value at 1

  ///Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.

  //---->
  // this is now updating the value of the color, to the palette components.
  useEffect(() => {
    setColor(HEXtoHSL(props.hex));
    //useEffect can't reference p2Color because its outside the scope and this is a callback
    setColor2(complimyHSL(HEXtoHSL(props.hex)));
  }, [props.hex]);

  // props.hex += 1;

  useEffect(() => {
    if (p1Color.h === 0) {
      refContainer.current = 1;
    }
    if (p1Color.h === 360) {
      refContainer.current = -1;
    }

    var updateVal = {
      h: (p1Color.h += refContainer.current), // within the context of just this - the refColor works, but it's not updating with the latest prop hex value. the current stays with the originally assigned value
      s: p1Color.s,
      l: p1Color.l,
    };
    const timer = setInterval(() => {
      setColor(updateVal);
    }, 1000);
    // clearing interval
    return () => clearInterval(timer);
  });

  //p1Color is continually being set, with the above timer, triggering the function below, instead of at the moment i want - which is at the click.

  return (
    <>
      <PaletteSlide
        id="pWidth1"
        width={pWidth1}
        hue={p1Color}
        hue2={p3Color}
        onClick={getPosition}
      ></PaletteSlide>
      <div className="sliderContainer"></div>
      <PaletteSlide
        id="pWidth2"
        width={pWidth2}
        hue={p2Color}
        hue2={p1Color}
        onClick={addSliderComp}
      ></PaletteSlide>
    </>
  );
}
