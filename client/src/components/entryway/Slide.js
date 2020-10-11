import React from "react";
import Text from "./Text";

export const randomColors = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Slide(props) {
  const styling = { background: randomColors() };

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
      <Text text={props.text} />
    </div>
  );
}
