import React, { Component } from "react";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";

class Glitch extends Component {
  componentDidMount() {
    this.props.updateLocation(window.location);
  }

  render() {
    return (
      <div>
        <div className="centerAlign">
          <img src={glitch} alt="teapot" />
        </div>
      </div>
    );
  }
}

export default Glitch;
