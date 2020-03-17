import React, { useState } from "react";
import styled from "styled-components";
import { ArrayOptions } from "../helpers/ArrayOptions";
import { Link } from "react-router-dom";
import { chooseElement } from "../helpers/popCalculators";
import { linkLocations } from "../helpers/ArrayOptions";

const BodyColor = styled.div`
  background-color: ${props => props.color};
  top: -10px;
  left: 0;
  // width: 100vw;
  // height: 100vh;
`;

const MenuTitles = styled.p`
  margin: 0em;
  margin-left: 1em;
  margin-right: 0.3em;
  display: inline;
  color: #d8d8d8;
  &:hover {
    color: ${props => props.color};
  }
`;

const Titles = styled.p`
  margin: 0em;
  margin-left: 1em;
  margin-right: 0.3em;
  display: inline;
  color: #666;
  style: bold;
`;

const ColorBar = styled.div`
  height: 40px;
  width: 100vw;
  // z-index: 30;
  position: fixed;
  top: 5;
  left: 5;
`;

const ColorSquares = styled.div`
  background-color: ${props => props.color};
  // width: 20px;
  height: 20px;
  float: left;
  cursor: pointer;
  border: solid;
  border-width: 2px;
  border-color: transparent;
  // border: solid;
  // border-width: 1px;
  //margin-right: 5px;
  opacity: 1;
  &:hover {
    //opacity: 0.3;
    // border: solid;
    // border-width: 1px;
    // border-color: white;
  }
`;

const paletteSquares = ArrayOptions("paletteColors");
// const linkLocations = [
//   "/events",
//   "/",
//   "/auth",
//   "/entryway",
//   "/about3e",
//   "/play",
//   "/oOoOs",
//   "/patches",
//   "/traces"
// ];

const colorPic = chooseElement(paletteSquares);
console.log(colorPic, "apples");

function MenuPicker() {
  const [bcolor, setColor] = useState("");
  const [loc, setLoc] = useState("apple");

  const pageNameClean = rawHttp => {
    let regEx = /-/i;
    let word = rawHttp
      .split("")
      .splice(1)
      .join("");

    return word.replace(regEx, " ");
  };

  return (
    <BodyColor color={bcolor}>
      <ColorBar>
        {linkLocations.map(i => (
          <Link to={i} key={i}>
            <ColorSquares
              color={chooseElement(paletteSquares)}
              key={i}
              onClick={function() {
                //setColor(chooseElement(paletteSquares));
                setLoc(pageNameClean(i));
              }}
            >
              <MenuTitles color="black">{pageNameClean(i)}</MenuTitles>
            </ColorSquares>
          </Link>
        ))}
        <ColorSquares color="" onClick={() => setColor("")} />
        <Titles color="black">{loc}</Titles>
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
