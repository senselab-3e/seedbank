import React, { useEffect, useState } from "react";
import SliderContainer from "./SliderContainer";
import styled from "styled-components";
import { HEXtoHSL, complimyHSL } from "../helpers/HexConverter";
import TextBox from "../components/TextBox";

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
  const [palette1Width, setWidth] = useState("50vw");
  const [palette2Width, setWidth2] = useState("50vw");

  const resetPaletteW = (newWidth, target) => {
    //target is a parameter in case i want to know which palette was clicked.
    setWidth(newWidth + "vw");
    setWidth2(100 - newWidth + "vw");
  };

  const getClickPos = (e) => {
    const target = e.target.id;
    const xPosition = e.clientX;
    const intViewportWidth = window.innerWidth;
    let percentageWidth = Math.floor((xPosition / intViewportWidth) * 100);
    // //calculate position as 100 - value so i can use it like a percentage val but with vw css
    resetPaletteW(percentageWidth, target);
  };

  //this function triggers a function in the parent entryway, that addes a new Slider Obj, passed down through the props.amt
  const addSliderComp = (e) => {
    //this grabs and updates the background color for the dynamically added slider slices, while asking for a new Slider Obj to be created and added to a an array that is looped through in the Slider component to display all the slice sliders
    props.funcAddSlider(p1Color);
    //i needed to do this because i could only attach one function to the listener onlick in the palette component.
    getClickPos(e);
  };

  let hexHsl = HEXtoHSL(props.bgHex);
  //complimentary color generator to match the current colorpicker set by the input val
  //let hexHslComp = complimyHSL(hexHsl);

  const [p1Color, setColor] = useState(HEXtoHSL(props.bgHex));
  const [p2Color, setColor2] = useState(complimyHSL(hexHsl));

  // let something = "a";

  //the useRef hook can also be used to store a mutable variable
  //*********that will not trigger an update of the component when changed. --> so refHex = useRef(hexHsl) is NOT what i want because i do want it to trigger a render // but it IS useful for within my useeffect for the var value

  //---->COLOR CHANGED IMPORTANT
  // let mult = 1;
  // const refContainer = useRef(mult); // THIS IS FOR the value incrementally changing for the background color in the useEffect calculations currently commented out right now.

  //var colorStatus = useRef(hexHsl.h);// using this yields the same results as using p1Color.h in the updateVal function below
  //NOTES ON useRef : this is a new hook type --- if i were using mult, it would be reset to 1, at each re-render. // aka not work the way i'd think it would within regular javascript. but in react the useRef() Hook isn’t just for DOM refs (side-effects). The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class. by utalizing the '.current' on my Ref, within the useEffect hook it will look at the value of that instance within the hook and not its continually reset value at 1 Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.

  // ---->this is now updating the value of the color, to the palette components.

  //this is handling the overall color change from the color picker
  useEffect(() => {
    setColor(HEXtoHSL(props.bgHex));
    setColor2(complimyHSL(HEXtoHSL(props.bgHex)));
  }, [props.bgHex]); //useEffect can't reference p2Color, because its outside the scope, hence references props directly. and this is a callback

  // I think i need to figure a SASS based way of changing the background color....
  //const initialColor = {colorStep: HEXtoHSL(props.bgHex)};
  //https://reactjs.org/docs/hooks-reference.html#useref
  // const reducer =(state,action)=> {
  //     switch(action.type){
  //       case 'increment':
  //         return {colorStep: state.colorStep + 1};
  //         case 'decrement':
  //           return{colorStep: state.colorStep - 1}
  //       default:
  //       throw new Error();
  //     }
  // }
  // useReducer(reducer, p1Color)
  // useEffect(() => {
  //   if (p1Color.h === 0) {
  //     refContainer.current = 1;
  //   }
  //   if (p1Color.h === 360) {
  //     refContainer.current = -1;
  //   }

  //   var updateVal = {
  //     h: (p1Color.h += refContainer.current), // within the context of just this - the refColor works, but it's not updating with the latest prop hex value. the current stays with the originally assigned value
  //     s: p1Color.s,
  //     l: p1Color.l,
  //   };
  //   //the continuous reseting of this hook, which is passed as a prop into the styling component, causes a new class name to be generated each time. this is not ideal. i keep attempting vanilla javascript approaches, but it won't update without the use of hook or prop values to tell the system what the current background color is. tricky. a plan css version of scrolling through color doesn't work either. it can move between color, but doesn't know how to move incrementally up until a  limit is reached.
  //   //this is causing nummerrouuss states/hooks to be continuously firing. a better solution needs to be found.
  //   // const timer = setInterval(() => {
  //   //   setColor(updateVal);
  //   // }, 1000);
  //   // // clearing interval
  //   // return () => clearInterval(timer);
  // }, [p1Color]);

  //p1Color is continually being set, with the above timer, triggering the function below, instead of at the moment i want - which is at the click.

  return (
    <>
      <PaletteSlide
        id="palette1Width"
        width={palette1Width}
        hue={p1Color}
        onClick={addSliderComp}
      ></PaletteSlide>
      <SliderContainer
        testAdd={true}
        amtSliders={props.amtSliders}
        hex={props.bgHex}
        indivColor={props.indivColor}
      ></SliderContainer>
      <PaletteSlide
        id="palette2Width"
        width={palette2Width}
        hue={p2Color}
        onClick={addSliderComp}
      ></PaletteSlide>
      <TextBox></TextBox>
    </>
  );
}
