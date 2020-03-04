import React from "react";
import Thingies from "../components/Thingies";
import styled from "styled-components";
import { ArrayOptions } from "../helpers/ArrayOptions";

const BodyColor = styled.div`
  // background-color: blue;
  // top: -10px;
  // left: 0;
  // width: 100vw;
  // height: 100vh;
`;

export const ColorBar = styled.div`
  height: 40px;
  z-index: 30;
`;

export const ColorSquares = styled.div`
  background-color: ${props => props.color};
  width: 20px;
  height: 20px;
  float: left;
`;

//body color is in case i want a background color to this component that isn't the overall 'light mode dark mode switch' happening in the theme

const paletteSquares = ArrayOptions("paletteColors");
console.log(paletteSquares);

const backgroundToggle = color => console.log("current color: " + color);

function Play() {
  return (
    <BodyColor>
      <ColorBar>
        {paletteSquares.map((color, i) => (
          <ColorSquares
            color={color}
            key={i}
            onClick={() => backgroundToggle(color)}
          />
        ))}
        <ColorSquares color="red" />
      </ColorBar>
      <Thingies />
    </BodyColor>
  );
}

export default Play;
