import React from "react";
import styled from "styled-components";

const PixelPatch = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  cursor: pointer;
  background-color: var(--entrypatch-color);
  -webkit-transition: width 7s, height 7s;
  -webkit-transition-timing-function: ease;
  transition: width 7s, height 7s;
  transition-timing-function: ease;
  &:hover {
    width: 600px;
    height: 600px;
  }
`;

// --entrypatch-color value is accurately being shared based on the changes in the parent Entryway.
// hypothetically, this means i should be able to keep all css in css accept where perhaps is used the reassignment of values in javascript, in the vanilla version.
export default function Pixel(prop) {
  //omg... so. a lot of traditional patter for setting of the onClick={(){thing}}... but since i was passing down a function as a prop, by calling it within another function it was an anonymous function being triggered rather then the prop function. i erroneously had onClick={() => prop.func}}
  return (
    <div>
      <PixelPatch
        left={prop.left}
        top={prop.top}
        onClick={prop.func}
      ></PixelPatch>
    </div>
  );
}
