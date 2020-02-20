import React, { Component } from "react";
import Sketch from "react-p5";
import teapot from "../assets/img/pot.jpg";
// import circli from "../assets/img/curosr.png";
import Colorality from './ColorPicker';


export default class Drawer extends Component {
  x = 50;
  y = 50;
  imgg;
  // var c;
  state = {
    color:{r: 31, g: 31, b: 31},
  }
  callbackFunction = (childData) => {
        this.setState({color: childData})
  };
  setup = (p5, canvasParent) => {
    this.c = p5.createCanvas(500, 500).parent(canvasParent); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    this.imgg = p5.loadImage(teapot);
  };
  draw = p5 => {
    p5.fill(this.state.color.r,this.state.color.g,this.state.color.b);
    if(p5.mouseIsPressed)
    p5.ellipse( p5.mouseX, p5.mouseY, 10, 10);
  };
  keyPressed = p5 => {
    let stickerdia = 50;
      if (p5.key === 'e') {
      p5.save(this.c, 'myCanvas', 'png');
      }
    };

  render() {
    return (
      <div>
      <Colorality parentCallback = {this.callbackFunction}/>
      <Sketch setup={this.setup} draw={this.draw} keyPressed={this.keyPressed}/>;
      </div>
  )}
}
