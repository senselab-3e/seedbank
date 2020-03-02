import React from "react";
import Sketch from "react-p5";
import teapot from "../pot.jpg";

const Twizzle = () => {
  let img;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500, p5.WEBGL).parent(canvasParentRef);
    img = p5.loadImage(teapot);
  };
  const draw = p5 => {
    if(!p5.mouseIsPressed)
    p5.background(0,0,0,0.2);
    p5.orbitControl(5);
    p5.noStroke();
    p5.texture(img);
    p5.rotateX(p5.radians(-25))
    p5.rotateY(p5.radians(-p5.frameCount*.5))
    let sx = p5.mouseX*2
    let sy = p5.mouseY*2
    p5.plane(sx, sx* .5)
  };
    return (
    <Sketch setup={setup} draw={draw} />
    );
}

export default Twizzle;
