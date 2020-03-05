import React, { Component, useState } from "react";
import Thingies from "../components/Thingies";
import styled from "styled-components";
import { ArrayOptions } from "../helpers/ArrayOptions";

const BodyColor = styled.div`
  background-color: ${props => props.color};
  top: -10px;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ColorBar = styled.div`
  height: 40px;
  z-index: 30;
`;

const ColorSquares = styled.div`
  background-color: ${props => props.color};
  width: 20px;
  height: 20px;
  float: left;
  cursor: pointer;
  border: solid;
  border-width: 1px;
  border-color: white;
  &:hover {
    border-color: deeppink;
  }
`;

//body color is in case i want a background color to this component that isn't the overall 'light mode dark mode switch' happening in the theme

function Play() {
  const paletteSquares = ArrayOptions("paletteColors");
  const [bcolor, setColor] = useState("");
  return (
    <BodyColor color={bcolor}>
      <ColorBar>
        {paletteSquares.map((color, i) => (
          <ColorSquares color={color} key={i} onClick={() => setColor(color)} />
        ))}
        <ColorSquares color="red" />
      </ColorBar>
      <Thingies />
    </BodyColor>
  );
}

export default Play;

// export default class Play extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bcolor: ""
//     };
//   }
//   render() {
//     //const [bcolor, setColor] = useState("");
//     return (
//       <BodyColor color={this.state.bcolor}>
//         <ColorBar>
//           {paletteSquares.map((color, i) => (
//             <ColorSquares
//               color={color}
//               key={i}
//               onClick={() => this.setState({ bcolor: color })}
//             />
//           ))}
//           <ColorSquares color="red" />
//         </ColorBar>
//         <Thingies />
//       </BodyColor>
//     );
//   }
// }
