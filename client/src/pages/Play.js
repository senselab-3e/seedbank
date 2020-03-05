import React from "react";
import Thingies from "../components/Thingies";

// import styled from "styled-components";
// import { ArrayOptions } from "../helpers/ArrayOptions";

import ColorPicker from "./ColorPicker";
//import Signature from "./components/Signature";

function Play() {
  return (
    <React.Fragment>
      <ColorPicker />

      <Thingies />
    </React.Fragment>
  );
}

export default Play;

///BELOW is how things were written when the repositioning and coloring was being called on every pixel click of the color picker
//to keep it from rerendering i broke it up into discrete components /// buuttt.... however inefficient i still prefer the effect of them changing position
//so i'm stashing the code below in case i ever want it back.

// const BodyColor = styled.div`
//   background-color: ${props => props.color};
//   top: -10px;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
// `;

// const ColorBar = styled.div`
//   height: 40px;
//   z-index: 30;
// `;

// const ColorSquares = styled.div`
//   background-color: ${props => props.color};
//   width: 20px;
//   height: 20px;
//   float: left;
//   cursor: pointer;
//   border: solid;
//   border-width: 1px;
//   border-color: white;
//   &:hover {
//     border-color: deeppink;
//   }
// `;

// const paletteSquares = ArrayOptions("paletteColors");
// //body color is in case i want a background color to this component that isn't the overall 'light mode dark mode switch' happening in the theme

// function Play() {
//   const [bcolor, setColor] = useState("");
//   return (
//     <BodyColor color={bcolor}>
//       <ColorBar>
//         {paletteSquares.map((color, i) => (
//           <ColorSquares color={color} key={i} onClick={() => setColor(color)} />
//         ))}
//         <ColorSquares color="red" />
//       </ColorBar>
//       <Thingies />
//     </BodyColor>
//   );
// }

// export default Play;

// const paletteSquares = ArrayOptions("paletteColors");

// export default class Play extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bcolor: ""
//     };
//   }
//   render() {
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
