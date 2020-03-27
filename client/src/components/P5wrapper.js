import React from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch3 from "./sketches/sketch3";
import tutorial from "./sketches/tutorial-repo-sketch";
// import sketch4 from "./sketches/sketch4";
// import sketch5 from "./sketches/sketch5";
// import sketch6 from "./sketches/sketch6";
// import sketch7 from "./sketches/sketch7";
// import sketch8 from "./sketches/sketch8";
// import sketch9 from "./sketches/sketch9";
import sketch10 from "./sketches/sketch10";

class P5wrapper extends React.Component {
  render() {
    return (
      <div>
        {/* <P5Wrapper sketch={sketch9} />
        <P5Wrapper sketch={sketch4} />
        <P5Wrapper sketch={sketch5} /> */}
        <P5Wrapper sketch={tutorial} />
        <P5Wrapper sketch={sketch3} />
        <P5Wrapper sketch={sketch10} />
        {/* <P5Wrapper sketch={sketch6} />

        <P5Wrapper sketch={sketch7} />
        <P5Wrapper sketch={sketch8} /> */}
      </div>
    );
  }
}

export default P5wrapper;

//ReactDOM.render(<P5wrapper />, document.getElementById("app"));
