import React, { Component } from "react";
import Sketch from "react-p5";
import teapot from "../assets/img/pot.jpg";

// export default class Shape extends Component {
var c = [{x: 30, y: 75, z:0}, {x:40, y:20, z:0}, {x:50, y:75, z:0}, {x:60, y:20, z:0}, {x:70, y:75, z:0}, {x:80, y:20, z:0}, {x:90, y:75, z:0}, {x:100, y:20, z:0}, {x:110, y:75, z:0}, {x:120, y:20, z:0}];
// // var img;
//   // let z = 0;

export default class Spread extends Component {

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    this.img = p5.loadImage(teapot);
  };
  // svvi = (p5, x) => {
  //   var y = p5.sin(x/(p5.sin(x/30)*10+290))*500;
  //     // console.log(y);
  //   return y;
  //   // console.log(y);
  // }

  draw = p5 => {
    p5.background(0,0,0,0.2);
    // // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    p5.textureWrap(p5.CLAMP);
    p5.textureMode(p5.NORMAL);
    p5.beginShape();

      p5.stroke(255);
      p5.fill('red');
    p5.beginShape(p5.TRIANGLE_STRIP);
    p5.texture(this.img);
    var uval = 0.5;
    for (var i = 0; i < c.length; i++){
        // p5.texture(this.img);
        let coord = c[i];
        let u = p5.map(coord.x, -this.img.width * uval, this.img.width * 0.5, 0, 1);
        let v = p5.map(coord.y, -this.img.height * uval, this.img.height * 0.5, 1, 0);
        if (p5.dist(p5.mouseX - p5.width /2, p5.mouseY - p5.height/ 2, coord.x, coord.y) < 70){
                coord.z+=2;
              }
        p5.vertex(coord.x, coord.y, coord.z, u, v);
      }
  p5.endShape(p5.CLOSE);
    }


  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
