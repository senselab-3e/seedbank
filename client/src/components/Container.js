import React, { useState } from "react";
import Slider from "../components/Slider";

export default function Container(props) {
  const [sliderAmt, setAmount] = useState(props.amt ? props.amt : 0);
  const [indivColor, setColor] = useState(props.indivcolor);

  //the hooks will not update on their own - despite the props value changing. it only runs on load. so this
  //is a quick way to have it update the value being passed into the components below, if it is a different value. it's a bit more stable
  // because then the prop valuing isn't just passing over and over continuously -- but the color value IS changing conintuously, so it doesn't make that much of difference. but retaining the same pattern logic for legibility.
  if (props.amt !== sliderAmt) {
    setAmount(props.amt);
  }

  if (props.indivcolor !== indivColor) {
    setColor(props.indivcolor);
  }
  //i moved to passing the props value directly into the colors and slider amounts, so it would update immediately and not need  a hooks reassignment

  let slideSet = [];
  for (let i = 0; i < sliderAmt; i++) {
    slideSet.push(<Slider key={i.toString()} color={indivColor} />);
  }

  return <div className="sliderContainer">{slideSet}</div>;
}
