import React from "react";
import P5Wrapper from "react-p5-wrapper";

import sketch3 from "./sketches/sketch3";
import sketch4 from "./sketches/sketch4";
import sketch5 from "./sketches/sketch5";
import sketch6 from "./sketches/sketch6";
class P5wrapper extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={sketch3} />
        <P5Wrapper sketch={sketch4} />
        <P5Wrapper sketch={sketch5} />
        <P5Wrapper sketch={sketch6} />
      </div>
    );
  }
}

export default P5wrapper;

//ReactDOM.render(<P5wrapper />, document.getElementById("app"));
