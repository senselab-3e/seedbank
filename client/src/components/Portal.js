import React from "react";
import styled from "styled-components";

const PortalPixel = styled.div`
  width: 25px;
  height: 25px;
  border: 1px inset white;
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: var(--entrypatch-color);
  -webkit-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  -moz-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  -ms-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  -o-transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  transition: width 2s ease-in 0.1ms, height 0.5s ease-in 2s;
  &:hover {
    width: 25vw;
    height: 25vw;
    cursor: pointer;
  }
`;

// --entrypatch-color value is accurately being shared based on the changes in the parent Entryway.
// hypothetically, this means i should be able to keep all css in css accept where perhaps is used the reassignment of values in javascript, in the vanilla version.

// const createEl = () => {
//   //e.preventDefault();
//   var pixel = document.createElement("div");
//   pixel.className = "pixel";
//   pixel.classList.add("picnicPatch");
//   pixel.style.left = "100px"; //props.func("left");
//   pixel.style.top = "100px"; //props.func("top");
//   const container2 = document.querySelector(".cont");
//   container2.appendChild(pixel);
// };

export default function Portal(prop) {
  //   createEl();

  return (
    <PortalPixel
      left={prop.left}
      top={prop.top}
      onClick={prop.func}
    ></PortalPixel>
  );
}
