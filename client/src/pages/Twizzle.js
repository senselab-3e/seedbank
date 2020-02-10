import React, { Component } from "react";
import Sketch from "react-p5";
import teapot from "../assets/img/pot.jpg";

export default class Twizzle extends Component {
  x = 50;
  y = 50;
  img;
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500, p5.WEBGL).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    this.img = p5.loadImage(teapot);
  };
  draw = p5 => {
    if(!p5.mouseIsPressed)
    p5.background(0);
    // // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    p5.orbitControl(5);
    p5.noStroke();
    p5.texture(this.img);
    p5.rotateX(p5.radians(-25))
    p5.rotateY(p5.radians(-p5.frameCount*.5))
    this.sx = p5.mouseX*2
    this.sy = p5.mouseY*2
    p5.plane(this.sx, this.sx* .5)
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
