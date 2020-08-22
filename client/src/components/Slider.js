import React, { useState } from "react";

export default function Slider(props) {
  //const [sliderColor, setColor] = props.color;
  // console.log(props.color.s, "slider level");
  const [textContent] = useState(props.textContent);

  const [colorSlide] = useState(
    `hsl(${props.color.h}, ${props.color.s},${props.color.l})`
  ); // i never reset the hook, so i eliminated the second param fun of setColor

  const swapClassOpen = function (e) {
    const target = e.target.classList;
    console.log(e.target.childNodes[0].classList, "apples");

    // target.contains("sliderOpen")
    //   ? target.remove("sliderOpen")
    //   : target.add("sliderOpen");

    if (target.contains("sliderOpen")) {
      target.remove("sliderOpen");
    } else {
      target.add("sliderOpen");
      e.target.childNodes[0].classList.remove("hidden");
      console.log(e.target.childNodes);
    }
  };

  const sliderStyling = {
    background: colorSlide,
  };

  return (
    <div className="slider" style={sliderStyling} onClick={swapClassOpen}>
      <div className="hidden">
        {textContent}
        <p>asdfadsfdfasdfsdf</p>
      </div>
    </div>
  );
}
