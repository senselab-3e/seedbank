import React, { Component } from "react";
import Sketch from "react-p5";
import teapot from "../assets/img/pot.jpg";
import Colorality from "../components/ColorPicker";


export default class Twizzle extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     color: { r: 51, g: 51, b: 51 }
  //   }
  // }
  x = 50;
  y = 50;
  img;
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    this.img = p5.loadImage(teapot);
  };
  draw = p5 => {
    p5.fill();
    if(p5.mouseIsPressed)
    p5.ellipse(p5.mouseX, p5.mouseY, 10, 10);
  };


  render() {
    return <div></div><Sketch setup={this.setup} draw={this.draw} />;
  }
}
