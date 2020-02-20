import React, { Component } from "react";
import Sketch from "react-p5";
import teapot from "../assets/img/pot.jpg";

export default class Scrunch extends Component {
  img;
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500, p5.WEBGL).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    this.img = p5.loadImage(teapot);
    p5.frameRate(2);
  };
  draw = p5 => {
    p5.background(0,0,0,0.2);
    // // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    p5.textureWrap(p5.CLAMP);
    p5.beginShape();
    p5.texture(this.img);
    for(var i = 0; i < 10; i++) {

      this.x = p5.random(-200, 200);
      this.y = p5.random(-200, 200);
      this.z = p5.random(-200, 200);
      this.u = p5.random(0, this.img.width);
      this.v = p5.random(0, this.img.height);
      p5.vertex(this.x, this.y, this.z, this.u, this.v);
    }
    p5.endShape(p5.CLOSE);
      };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
