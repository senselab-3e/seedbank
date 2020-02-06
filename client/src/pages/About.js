import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
// import ReactDOM from "react-dom";

class About extends Component {

  componentDidMount(

    //introduce callback function so that the app and then child nav component will known when each of these components have loaded
  ) 
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
