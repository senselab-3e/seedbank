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
