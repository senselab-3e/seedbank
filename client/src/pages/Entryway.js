import React, { useState } from "react";
import "../style/00.css";
//import styled, { keyframes } from "styled-components";
import styled from "styled-components";
import Pixel from "../components/Pixel";
import Palette from "../components/Palette";
import Container from "../components/Container";
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

  const [amt, setAmount] = useState(0);
  // const [portalnum, setPorts] = useState(0);

  //  How do I update state with values that depend on the current state?
  // Pass a function instead of an object to setState to ensure the call always uses the most updated version of state (see below).

  // const addPortals = () => setPorts(portalnum + 1);

  // const addPortals = (e) => {
  //   e.preventDefault();
  //   setPorts(portalnum + 1);
  // };

  //inline approach <div className="pixel picnicPatch" style={{top: '300px', left: '300px'}}></div>
  //this is useful because i could re-use it for handing random position to many elements -- as the ranValMinMax() will call a unique position every time

  //using this approach so that you can more cleanly read and then inject inline styling with a single object

  // const portalStyling = {
  //   top: createPositions("top"),
  //   left: createPositions("left"),
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

  let momentaryColor = {}; // eventually contains h, s, l key value pairs when capturing color information, from child component palette1
  //NOTE: returning an hsl val of the current palette1 color, as it's scrolling. so this is happening quite continuously
  const currentColor = (val) => {
    momentaryColor = val;
  };

  //this is a bit of a js html way. with current Color i'm trying to pass up the vals through the props in react. refactor and get the prop method working later.
  // const currentHue = () => {
  //   let sample = document.body.querySelector("#pWidth1"); // just for testing purposes.
  //   //this is actually not to tricky. query Selector will choose the first instance, so even if i put palette instead of palette1, it will still grab hue information from the first palette, even if i don't reference it by a single id name
  //   let hsl = window.getComputedStyle(sample, null).getPropertyValue("--hsl");
  //   return hsl;
  // };

  // console.log(locations[0] ? locations[0].x : locations);

  //ANOTHER APPROACH using a portal Component. But there is seemingly no way around not having the location prop continually updating the locatin of alll instances of the Patches -- and so i'm going back to an js element based apprach.
  //let portals = [];
  //portalnum's state is being updated on the component function click, and that hook state then re-loops the creation of the portal component
  // this is also because it's in a loop.
  // for (let i = 0; i < portalnum; i++) {
  //   // var xPos = createPositions("top");
  //   // var yPos = createPositions("left");
  //   portals.push(
  //     <Portal
  //       key={Math.random(portalnum)}
  //       // top={createPositions("top")}
  //       // left={createPositions("left")}
  //       // top={locations[i].y}
  //       // left={locations[i].x}
  //       // top={xPos}
  //       // left={yPos}
  //       func={addPortals}
  //     />
  //   );
  // }

  //NOTE this container div is being used to append child new elements - even though there are no significant csss

  // useEffect(() => {
  //   numSliders.push(newby);
  //   setSliders(numSliders);
  //   //useEffect can't reference p2Color because its outside the scope and this is a callback
  // }, numSliders);

  // useEffect(() => {
  //   setSliders(numSliders);
  // });

  const requestNewSlider = (color) => {
    //caps the number of sliders you can add at 30.
    numSliders < 40 ? (numSliders += 1) : (numSliders = numSliders);
    setAmount(numSliders); // sets the hook value for the num of sliders --- > amt ---> which is then passed down to child components.
    setSliderColor(color); // sets hook for color value passed to slider // this originates from a callback function that was passed to the palette component, which grabs the current hook value, an hsl color value, for palette 1 - within the current phase of its scrolling color value. that value is being passed up to the parent component through the func passed down to it
  };

  // useEffect(() => {
  //   setSliders(numSliders);
  // }, numSliders);

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

      <Palette
        hex={bcolor}
        func={currentColor}
        func3={requestNewSlider}
      ></Palette>
      <Container
        testAdd={true}
        amt={amt}
        hex={bcolor}
        indivcolor={sliderColor}
        func={currentColor}
      ></Container>
      {/* </BodyColor> */}
    </div>
  );
}
