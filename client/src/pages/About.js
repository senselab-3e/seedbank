import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
// import ReactDOM from "react-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div className="Center">
          <img className="Cup" src={teapot} alt="teapot"></img>
        </div>
      </div>
    );
  }
}

export default About;
