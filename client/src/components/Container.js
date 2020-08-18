import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { HEXtoHSL } from "../helpers/HexConverter";

export default function Container(props) {
  // console.log(props.sliderInfo);
  // console.log(props.sliderInfo ? props.sliderInfo.length : 0);
  console.log(props.indivcolor, "container");
  const [sliderSlides, setSliders] = useState(props.sliderInfo);
  const [sliderAmt, setAmount] = useState(props.amt ? props.amt : 0);
  const [p1Color, setColor] = useState(props.indivcolor);

  if (props.amt !== sliderAmt) {
    setAmount(props.amt);
  }

  console.log(props.amt);

  let slides = [];
  for (let i = 0; i < sliderAmt; i++) {
    slides.push(<Slider key={i.toString()} color={props.indivcolor} />);
  }

  //this only works once, but for no subsequent ones.
  // useEffect(() => {
  //   if (props.sliderInfo) {
  //     console.log(props.sliderInfo);
  //     setAmount(props.sliderInfo.length);
  //     if (props.sliderInfo.length > sliderAmt) {
  //       setAmount(props.sliderInfo.length);
  //     }
  //   }
  // }, [props.sliderInfo]);

  return <div className="sliderContainer">{slides}</div>;
}
