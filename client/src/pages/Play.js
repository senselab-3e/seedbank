import React from "react";
import Thingies from "../components/Thingies";
import styled from "styled-components";

const BodyColor = styled.div`
  // background-color: blue;
  // top: -10px;
  // left: 0;
  // width: 100vw;
  // height: 100vh;
`;

//body color is in case i want a background color to this component that isn't the overall 'light mode dark mode switch' happening in the theme

function Play() {
  return (
    <BodyColor>
      <h3>Play </h3>
      <Thingies />
      ooo
    </BodyColor>
  );
}

export default Play;
