import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PixelPop } from "./PixelPortal";
// extracts function that will generate x and y positions, based on propsed passed to it. currently calculates for the whole of the browser window
import { createPositions } from "../../helpers/Calculators";

const PixelPatch = styled.div.attrs((props) => ({
  style: {
    background: props.background,
    top: props.top,
    left: props.left,
  },
}))`
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

export default function Pixel(props) {
  const [pColor, setColor] = useState(props.bgHex);
  // eslint-disable-next-line
  const [xPos, setXpos] = useState(createPositions("top"));
  // eslint-disable-next-line
  const [yPos, setYpos] = useState(createPositions("left"));

  let [currentPaletteNum, setPalNum] = useState(props.paletteNum);

  //bring this back once the background color is scrolling hues again.
  useEffect(() => {
    setColor(props.bgHex);
  }, [props.bgHex]);

  useEffect(() => {
    props.paletteNum < 10
      ? setPalNum(props.paletteNum)
      : console.log("limit on palette amts hit");
  }, [props.paletteNum]);

  //... so. a lot of traditional patterns for setting of the onClick={(){thing}}... but since i was passing down a function as a props, by calling it within another function it was an anonymous function being triggered rather then the props function. i erroneously had onClick={() => props.func}}
  // containerPalette is also being used as the appendChild target of new Background component palettes added to the view, when pixel component is clicked

  return (
    <PixelPatch
      // left={props.left}
      // top={props.top}
      top={xPos}
      left={yPos}
      background={pColor}
      onClick={(e) => {
        //this could be where the background color of palettes is passed.
        const card = new PixelPop(pColor);
        props.setPalNum((currentPaletteNum += 1));
        card.create();
      }}
    ></PixelPatch>
  );
}
