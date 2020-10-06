import React, {
  useEffect,
  useState
} from "react";
import styled from "styled-components";
import {
  Card
} from "./PixelPortal";
// extracts function that will generate x and y positions, based on propsed passed to it. currently calculates for the whole of the browser window
import {
  createPositions
} from "../../helpers/Calculators";

const PixelPatch = styled.div.attrs((props) => ({
  style: {
    background: props.background,
    top: props.top,
    left: props.left,
  },
}))
`
  position: absolute;
  width: 25px;
  height: 25px;
  cursor: pointer;
  -webkit-transition: width 7s, height 7s;
  -webkit-transition-timing-function: ease;
  transition: width 7s, height 7s;
  transition-timing-function: ease;
  &:hover {
    width: 600px;
    height: 600px;
  }
`;

export default function Pixel(prop) {
  const [pColor, setColor] = useState(prop.bgHex);
  const [xPos, setXpos] = useState(createPositions("top"));
  const [yPos, setYpos] = useState(createPositions("left"));

  //bring this back once the background color is scrolling hues again.
  //   useEffect(() => {
  //     setColor(prop.bgHex);
  //   }, [prop.bgHex]);

  //... so. a lot of traditional patterns for setting of the onClick={(){thing}}... but since i was passing down a function as a prop, by calling it within another function it was an anonymous function being triggered rather then the prop function. i erroneously had onClick={() => prop.func}}
  return ( <
    div class = "containerPalette" >
    <
    PixelPatch
    // left={prop.left}
    // top={prop.top}
    top = {
      xPos
    }
    left = {
      yPos
    }
    background = {
      pColor
    }
    onClick = {
      (e) => {
        //this could be where the background color of palettes is passed.
        const card = new Card();
        card.create();
      }
    } >
    < /PixelPatch> <
    /div>
  );
}