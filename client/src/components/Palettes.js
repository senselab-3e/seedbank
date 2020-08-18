import React, { useEffect, useState, useRef } from "react";
import Container from "./Container";
import styled from "styled-components";
import { HEXtoHSL, complimyHSL } from "../helpers/HexConverter";

// const colorScroll = keyframes`
//     0% {
//         background-color: var(--hsl);
//     }
//     50% {
//         background-color: var(--inverseHsl);
//     }
//     95% {
//       background-color: var(--hsl);
//     }
// }`;

//  -webkit-animation: ${colorScroll} 60s infinite;
//  animation: ${colorScroll} 60s infinite;

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


  --hsl: hsl(var(--h), var(--s), var(--l));
  background-color: var(--hsl);
  -webkit-transition: width 3s;
  -moz-transition: width 3s;
  -ms-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  padding: 0em;
  margin: 0em;
`;

export default function Palettes(props) {
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
    resetCubeWidth(percentageWidth, target);
  };

  //this function triggers a function in the parent entryway, that addes a new Slider Obj, passed down through the props.amt
  const addSliderComp = (e) => {
    //this grabs and updates the background color for the dynamically added slider slices, while asking for a new Slider Obj to be created and added to a an array that is looped through in the Slider component to display all the slice sliders
    props.funcAddSlider(p1Color);
    //i needed to do this because i could only attach one function to the listener onlick in the palette component.
    getPosition(e);
  };

  let hexHsl = HEXtoHSL(props.bgHex);
  //complimentary color generator to match the current colorpicker set by the input val
  //let hexHslComp = complimyHSL(hexHsl);

  const [p1Color, setColor] = useState(HEXtoHSL(props.bgHex));
  const [p2Color, setColor2] = useState(complimyHSL(hexHsl));

  // let something = "a";

  //the useRef hook can also be used to store a mutable variable
  //*********that will not trigger an update of the component when changed. --> so refHex = useRef(hexHsl) is NOT what i want because i do want it to trigger a render // but it IS useful for within my useeffect for the var value

  let mult = 1;
  const refContainer = useRef(mult);
  //var colorStatus = useRef(hexHsl.h);// using this yields the same results as using p1Color.h in the updateVal function below
  //NOTES ON useRef : this is a new hook type --- if i were using mult, it would be reset to 1, at each re-render. // aka not work the way i'd think it would within regular javascript. but in react the useRef() Hook isn’t just for DOM refs (side-effects). The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class. by utalizing the '.current' on my Ref, within the useEffect hook it will look at the value of that instance within the hook and not its continually reset value at 1 Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.

  // ---->this is now updating the value of the color, to the palette components.
  useEffect(() => {
    setColor(HEXtoHSL(props.bgHex));
    setColor2(complimyHSL(HEXtoHSL(props.bgHex)));
  }, [props.bgHex]); //useEffect can't reference p2Color, because its outside the scope, hence references props directly. and this is a callback

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
    }, 100);
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
        onClick={addSliderComp}
      ></PaletteSlide>
      <div className="sliderContainer"></div>
      <Container
        testAdd={true}
        amtSliders={props.amtSliders}
        hex={props.bgHex}
        indivColor={props.indivColor}
      ></Container>
      <PaletteSlide
        id="pWidth2"
        width={pWidth2}
        hue={p2Color}
        onClick={addSliderComp}
      ></PaletteSlide>
    </>
  );
}
