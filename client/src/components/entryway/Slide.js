import React, { useState } from "react";
import Text from "./Text";
import { randomColors } from "../../helpers/Calculators";

export default function Slide(props) {
  // eslint-disable-next-line
  const [color, setColor] = useState(randomColors());
  const styling = { background: color };

  const replaceClassName = (e) => {
    const sliderDiv = e.target;
    if (e.target) {
      sliderDiv.classList.contains("sliderOpen")
        ? sliderDiv.classList.remove("sliderOpen")
        : sliderDiv.classList.add("sliderOpen");

      const textBoxDiv = e.target.firstElementChild;
      textBoxDiv.classList.contains("hide")
        ? textBoxDiv.classList.remove("hide")
        : textBoxDiv.classList.add("hide");
    } else {
      console.log("no target - error trigger");
    }
  };
  return (
    <div className="slider" style={styling} onClick={replaceClassName}>
      <Text text={props.text} />
    </div>
  );
}
