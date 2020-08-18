import React, { useState } from "react";

export default function Slider(props) {
  //const [sliderColor, setColor] = props.color;
  // console.log(props.color.s, "slider level");
  const [colorSlide, setColor] = useState(
    `hsl(${props.color.h}, ${props.color.s},${props.color.l})`
  );
  const sliderStyling = {
    background: colorSlide,
  };

  const checkOpen = function (e) {
    const target = e.target.classList;
    target.contains("sliderOpen")
      ? target.remove("sliderOpen")
      : target.add("sliderOpen");
  };

  return (
    <div className="slider" style={sliderStyling} onClick={checkOpen}></div>
  );
}
