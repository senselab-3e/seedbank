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
    //The mouseIsPressed system variable in p5.js is used to store the boolean value. If mouse is pressed then it stores True otherwise store False.
    ///this is why simply if (p5.mousePressed) is not the right direction
    if (p5.mouseIsPressed) {
      //p5.line(p5.mouseX, p5.mouseY, 70, 70);
      //The system variable pmouseX always contains the horizontal position of the mouse in the frame previous to the current frame.
      //however, for some reason it's not holding this value for very long or at all.....
      p5.rect(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      p5.ellipse(50, 50, 50, 50);
    } else {
      p5.rect(25, 25, 50, 50);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
