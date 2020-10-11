import React, { useState, useEffect } from "react";
//import axios from "axios";
import Slide from "./Slide";

export const randomColors = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export default function Slider(props) {
  //props.paletteNum
  //const [color, setColor] = useState(randomColors());
  const [currentPaletteNum, setPalNum] = useState(12);
  //let [apiList, setApiList] = useState([]);
  //   const apiGetList = (pathway) => {
  //     axios
  //       .get(`/api/${pathway}`)
  //       .then((sliderTexts) => {
  //         // console.log(
  //         //   "coming soon this will be where a prop fuction is called to re-initialis the axio request for the lates slidertext el view"
  //         // );
  //         setApiList({ texts: sliderTexts.data });
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   useEffect(() => {
  //     apiGetList("sliderTexts");
  //   }, []);

  //   useEffect(() => {
  //     setPalNum(props.paletteNum);
  //   }, [props.paletteNum]);

  //   console.log(apiList);
  const sliders = [];

  const colors = [];

  for (let i = 0; i < currentPaletteNum; i++) {
    let acolor = randomColors();
    colors.push(acolor);
    sliders.push(<Slide key={i} color={colors[i]}></Slide>);
  }

  return <>{sliders}</>;
}
