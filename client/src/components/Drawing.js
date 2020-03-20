import React from "react";
import Sketch from "react-p5";

export default function Drawing() {
  var setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  var draw = p5 => {
    p5.background(0);

    // // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes

    p5.stroke(255);
    if (p5.mouseIsPressed === true) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
