import React from "react";
import P5Wrapper from "react-p5-wrapper";

import sketch3 from "./sketches/sketch3";

class P5wrapper extends React.Component {
  render() {
    return (
      <div>
        <P5Wrapper sketch={sketch3} />
      </div>
    );
  }
}

export default P5wrapper;

//ReactDOM.render(<P5wrapper />, document.getElementById("app"));
