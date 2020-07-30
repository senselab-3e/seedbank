import React from "react";
import styled from "styled-components";

const Patch = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: var(--entrypatch-color);
`;

// --entrypatch-color value is accurately being shared based on the changes in the parent Entryway.
// hypothetically, this means i should be able to keep all css in css accept where perhaps is used the reassignment of values in javascript, in the vanilla version.
export default function Pixel() {
  return (
    <div>
      <Patch left="100px" top="300px"></Patch>
    </div>
  );
}
