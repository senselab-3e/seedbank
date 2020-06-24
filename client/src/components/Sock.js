import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
const ENDPOINT = "http://localhost:3000";

class Sock extends Component {
  constructor(){
    super();
    this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor(){
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
      </div>
    );
  }
}

export default Sock;
