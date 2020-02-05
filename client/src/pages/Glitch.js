import React from "react";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";

const Glitch = () => {
 
    return (
      <div className="glitch">
        <h3>glitch</h3>
        <img src={glitch} alt="glitch" />
      </div>
    );
  }


export default Glitch;
