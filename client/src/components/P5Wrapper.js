import React from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch1 from "./p5/sketch1";
//just here to double check my image pathway is good
//import photo from "../assets/images/0d/0b/c6/2a/photo_2020-03-05_15-14-32.jpg";

class P5wrapper extends React.Component {
  render() {
    return (
      <div className="main">
        dafds
        {/* <img src={photo} alt="test photo" /> */}
        <P5Wrapper sketch={sketch1} />
      </div>
    );
  }
}

export default P5wrapper;
