import React, { useState } from "react";
import styled from "styled-components";
import { ArrayOptions } from "../helpers/ArrayOptions";
import { Link } from "react-router-dom";
import { chooseElement } from "../helpers/popCalculators";

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

const paletteSquares = ArrayOptions("paletteColors");
const linkLocations = [
  "/events",
  "/",
  "/auth",
  "/entryway",
  "/about3e",
  "/play",
  "/oOoOs",
  "/patches",
  "/traces"
];

const colorPic = chooseElement(paletteSquares);
console.log(colorPic, "apples");

function MenuPicker() {
  const [bcolor, setColor] = useState("");
  return (
    <BodyColor color={bcolor}>
      <ColorBar>
        {linkLocations.map(i => (
          <Link to={i}>
            <ColorSquares
              color={chooseElement(paletteSquares)}
              key={i}
              onClick={() => setColor(chooseElement(paletteSquares))}
            ></ColorSquares>
          </Link>
        ))}
        <ColorSquares color="" onClick={() => setColor("")} />
      </ColorBar>
    </BodyColor>
  );
}

export default MenuPicker;

//old prop form of writing:

// export class ColorPicker extends Component {
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
//       </BodyColor>
//     );
//   }
// }

// export default ColorPicker;
