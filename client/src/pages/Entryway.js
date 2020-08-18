import React, { useState, useEffect } from "react";
import "../style/00.css";
//import styled, { keyframes } from "styled-components";
import styled from "styled-components";
import Pixel from "../components/Pixel";
import Palette from "../components/Palette";
import Container from "../components/Container";
// import Portal from "../components/Portal";
import { HEXtoHSL } from "../helpers/HexConverter";

///this was the 00.js

// const colorScroll = keyframes`
//     0% {
//         background-color: var(--entrypatch-color);
//     }

//     30% {
//         background-color: white;
//     }

//     45% {
//         background-color: var(--entrypatch-color);
//     }

//     70% {
//         background-color: black;
//     }

//     95% {
//       background-color: var(--entrypatch-color);
//     }
// }`;

// const BodyColor = styled.div`
//   background-color: var(--entrypatch-color);
//   padding: 0px;
//   margin: 0px;
//   height: 100vh;
//   width: 100vw;
//   z-index: 0;
//   -webkit-animation: ${colorScroll} 60s infinite;
//   animation: ${colorScroll} 60s infinite;
//   --entrypatch-color: ${(props) => props.color};
//   --varColor1: #5c0232;
//   font-family: "OpenSans", sans-serif;
//   font-weight: 400;
//   font-size: 14px;
// `;

const InputColor = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
`;

//var ypos = (Math.random(window.innerWidth) * window.innerWidth) / 2 + "px"; // i need this because if the a link is  parent of pixel, it needs to share the coors of pixel;
// var xpos =
//   (Math.random(window.innerHeight) * window.innerHeight - 10) / 2 - 15 + "px";

//this isn't working properly -- revisit

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

// var locations = [];

// let portNum = (n) => n;

// for (let i = 0; i < portNum; i++) {
//   var xPos = createPositions("top");
//   var yPos = createPositions("left");
//   locations.push({
//     x: xPos,
//     y: yPos,
//   });
// }

let sliderNum = {
  key0: {
    num: [1],
    color: "#333",
  },
};

let arraySliders = [];

class Slider {
  constructor(key, color) {
    this.key = key;
    this.color = color;
  }
}

export default function Entryway() {
  //when i left the state blank '' - it would cause problems for the delegation of its value as a prop for the styled components
  const [bcolor, setColor] = useState("#f812c0");
  const [sliderComp, setSliders] = useState();
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

  let momentaryColor = {};

  //this could also be adapted to a class constructor

  const createSlider = () => {
    //e.preventDefault();
    var slider = document.createElement("div");
    slider.className = "slider";
    // console.log(momentaryColor);
    slider.style.backgroundColor = currentHue();
    //momentaryColor;
    // slider.style.backgroundColor = bcolor;
    slider.onclick = function () {
      slider.classList.contains("sliderOpen")
        ? slider.classList.remove("sliderOpen")
        : slider.classList.add("sliderOpen");
    };
    const container = document.querySelector(".sliderContainer");
    container.appendChild(slider);
  };

  const currentColor = (val) => {
    //returning an hsl val of the current palette1 color, as it's scrolling. so this is happening quite continuously
    console.log(val);
    momentaryColor = val;
  };

  //this is a bit of a js html way. with current Color i'm trying to pass up the vals through the props in react. refactor and get the prop method working later.
  const currentHue = () => {
    let sample = document.body.querySelector("#pWidth1"); // just for testing purposes.
    //this is actually not to tricky. query Selector will choose the first instance, so even if i put palette instead of palette1, it will still grab hue information from the first palette, even if i don't reference it by a single id name
    let hsl = window.getComputedStyle(sample, null).getPropertyValue("--hsl");
    return hsl;
  };

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
  //   arraySliders.push(newby);
  //   setSliders(arraySliders);
  //   //useEffect can't reference p2Color because its outside the scope and this is a callback
  // }, arraySliders);

  // useEffect(() => {
  //   setSliders(arraySliders);
  // });

  const requestNewSlider = (color) => {
    console.log(sliderNum.key0, color);
    let newby = new Slider(arraySliders.length, color); // so this push isn't working.
    arraySliders.push(newby);
    // // console.log(arraySliders[arraySliders.length - 1]);
    // console.log(arraySliders.length);
    setSliders(arraySliders);
    setAmount(arraySliders.length);
    console.log(sliderComp);
    console.log(amt, "slidercomp");
    console.log(arraySliders[arraySliders.length - 1].color);
    //setSliderColor(HEXtoHSL(color));
    console.log(color, "color grabbed on click");
    setSliderColor(color);
  };

  // useEffect(() => {
  //   setSliders(arraySliders);
  // }, arraySliders);

  return (
    <div className="containerPalette">
      {/* <BodyColor color={bcolor}>
       */}
      {/* {portals} this is/was for another component based way of addin Portals. see notes above */}
      {/* <div className="pixel picnicPatch hidden" style={portalStyling}></div> */}
      <Pixel
        // top={createPositions("top")}
        // left={createPositions("left")}
        func={createEl}
        background={bcolor}
      ></Pixel>
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
        func2={createSlider}
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
