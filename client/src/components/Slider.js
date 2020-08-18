import React, { useState } from "react";

export default function Slider(props) {
  //const [sliderColor, setColor] = props.color;
  console.log(props.color.s, "slider level");
  const [colorSlide, setColor] = useState(
    `hsl(${props.color.h}, ${props.color.s},${props.color.l})`
  );
  const sliderStyling = {
    background: colorSlide,
  };

  const checkOpen = function (e) {
    const target = e.target.classList;
    e.target.classList.contains("sliderOpen")
      ? e.target.classList.remove("sliderOpen")
      : e.target.classList.add("sliderOpen");
  };

  return (
    <div className="slider" style={sliderStyling} onClick={checkOpen}></div>
  );
}
