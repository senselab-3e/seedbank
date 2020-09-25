import React from "react";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import SliderHome from "../components/SliderHome";

const Glitch = () => {
  return (
    <div>
      <SliderHome />
      <img src={glitch} alt="glitch" />
    </div>
    // <div className="glitch">

    // </div>
  );
};

export default Glitch;
