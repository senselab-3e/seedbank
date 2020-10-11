import React from "react";
import Text from "./Text";

export default function Slide(props) {
  const styling = { background: props.color };

  const replaceClassName = (e) => {
    const sliderDiv = e.target;
    sliderDiv.classList.contains("sliderOpen")
      ? sliderDiv.classList.remove("sliderOpen")
      : sliderDiv.classList.add("sliderOpen");

    const textBoxDiv = e.target.firstElementChild;
    textBoxDiv.classList.contains("hide")
      ? textBoxDiv.classList.remove("hide")
      : textBoxDiv.classList.add("hide");
  };
  return (
    <div className="slider" style={styling} onClick={replaceClassName}>
      <Text />
    </div>
  );
}
