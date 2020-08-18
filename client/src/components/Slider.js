import React, { useState } from "react";

export default function Slider(props) {
  //const [sliderColor, setColor] = props.color;
  // console.log(props.color.s, "slider level");
  const [colorSlide] = useState(
    `hsl(${props.color.h}, ${props.color.s},${props.color.l})`
  ); // i never reset the hook, so i eliminated the second param fun of setColor

  const swapClassOpen = function (e) {
    const target = e.target.classList;
    target.contains("sliderOpen")
      ? target.remove("sliderOpen")
      : target.add("sliderOpen");
  };

  const sliderStyling = {
    background: colorSlide,
  };

  return (
    <div className="slider" style={sliderStyling} onClick={swapClassOpen}></div>
  );
}
