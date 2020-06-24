import React, { useState, useEffect, Component } from "react";
import socketIOClient from "socket.io-client";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";
import Sock from "./Sock"
// import 'p5/lib/addons/p5.sound';

import boing from "../assets/img/boing.mp3";
const ENDPOINT = "http://localhost:3000";

export default class Socketz extends Component {
  // const [response, setResponse] = useState("");
  //
  // constructor(props) {
  //    super(props);
  //    this.state = {
  //      mouses:{
  //        x: 0,
  //        y: 0
  //      }
  //    };
  //    // this.handleStatusChange = this.handleStatusChange.bind(this);
  //
  //  }
  // componentDidMount() {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("mouse", data => {
  //     console.log(data);
  //
  //   });
  //   socket.emit('mouse', this.state.mouses);
  // }
  // componentDidUpdate() {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("mouse", data => {
  //     console.log(data);
  //
  //   });
  //   socket.emit('mouse', this.state.mouses);
  // }
  //
  // handleStatusChange(status) {
  //    this.setState({
  //      mouses: status.mouses
  //    });
  //  }

  // setup = (p5, canvasParentRef) => {
  // p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  // // this.song = p5.loadSound(boing);
  // // p5.getAudioContext().suspend();
  // p5.background('red');
  // this.socket = socketIOClient(ENDPOINT);
  // this.socket.on("mouse", data => {
  //   this.newDrawing(data);
  // });
  // };

  // newDrawing = (data) =>{
  //   console.log(data);
  //   // p5.noStroke();
  //   // p5.fill('green');
  //   // p5.ellipse(data.x, data.y, 36, 36);
  // }

  // mouseDragged = (p5)=>{
  //   console.log(p5.mouseX+ ',' + p5.mouseY);
  //
  //   this.data={
  //   x: p5.mouseX,
  //   y: p5.mouseY
  // }
  // this.socket.emit('mouse', this.data);
  //
  //
  // p5.fill('blue');
  // p5.ellipse(p5.mouseX, p5.mouseY, 36, 26);
  //
  // }



// draw = (p5) => {
//   p5.background(255);
//   p5.textAlign(p5.CENTER);
//
//   if (p5.getAudioContext().state !== 'running') {
//     p5.text('click to start audio', p5.width/2, p5.height/2);
//   } else {
//     p5.text('audio is enabled', p5.width/2, p5.height/2);
//   }
// }

// touchStarted() {
//   if (getAudioContext().state !== 'running') {
//     getAudioContext().resume();
//   }
//   var synth = new p5.MonoSynth();
//   synth.play('A4', 0.5, 0, 0.2);
// }

  render() {
    return (
      <div>
      <Sock/>
      <a href="peep/index.html">peeeep</a>
      <Sketch setup={this.setup} mouseDragged={this.mouseDragged} mousePressed={this.mousePressed} draw={this.draw} newDrawing={this.newDrawing}/>;
      </div>
    );
  }
}
