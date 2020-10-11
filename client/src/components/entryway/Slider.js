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
  console.log("SLIDER CHILD LEVEL db res:", props.dataList);
  // eslint-disable-next-line
  const [currentPaletteNum, setPalNum] = useState(12);

  // eslint-disable-next-line
  const [dataList, setDataList] = useState(props.dataList);
  const sliders = [];
  //const colors = [];

  useEffect(() => {
    setDataList(props.dataList);
  }, [props.dataList]);

  for (const key in dataList) {
    // console.log(dataList[key].body, "ehll");
    sliders.push(
      <Slide key={key} color={randomColors()} text={dataList[key].body}>
        ddd
      </Slide>
    );
  }

  return <>{sliders}</>;
}
