import React from "react";
import styled from "styled-components";

const PixelPatch = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
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
  return (
    <div>
      <PixelPatch left={prop.left} top={prop.top}></PixelPatch>
    </div>
  );
}
