import React, { useState } from "react";
//import "../style/00.css";
import styled, { keyframes } from "styled-components";

const colorScroll = keyframes`
    15% {
        background-color: var(--entrypatch-color);
    }

    30% {
        background-color: white;
    }

    45% {
        background-color: var(--entrypatch-color);
    }

    60% {
        background-color: black;
    }

    75% {
        background-color: var(--entrypatch-color);
    }

    95% {
        background-color: white;
    }
}`;

const BodyColor = styled.div`
  background-color: var(--entrypatch-color);
  height: 100vh;
  width: 100vw;
  -webkit-animation: ${colorScroll} 60s infinite;
  animation: ${colorScroll} 60s infinite;
  --entrypatch-color: ${(props) => props.color};
  --varColor1: #5c0232;
  font-family: "OpenSans", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const InputColor = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
`;

//import styled, { keyframes } from "styled-components";

export default function Entryway() {
  // constructor(props) {
  //   super(props);
  //   this.state = { color: "#ffffff" };

  //   // This binding is necessary to make `this` work in the callback
  //   //this.handleClick = this.handleClick.bind(this);
  // }

  const [bcolor, setColor] = useState("#6c49e0");

  // function changeColor(e) {
  //   console.log(e.target.value);
  //   // this.setState((state) => ({
  //   //   color: e.target.value,
  //   // }));
  //   setColor(e.target.value);
  //   //return e.target.value;
  // }
  return (
    <BodyColor color={bcolor}>
      <div className="colorBox">
        <InputColor>
          <input
            className="inputColor"
            type="color"
            defaultValue={bcolor}
            onChange={() => setColor("#e09b49")}
          ></input>
        </InputColor>
      </div>
    </BodyColor>
  );
}
