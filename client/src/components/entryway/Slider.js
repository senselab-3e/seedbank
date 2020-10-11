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

  // console.log('SLIDER LEVEL',dataList);

  for (const key in dataList) {
    //console.log(dataList[key].length, "ehll");
    for (let i = 0; i < dataList[key].length; i++) {
      //const element = dataList[key][i];
      sliders.push(
        <Slide key={i} color={randomColors()} text={dataList[key][i].body}>
          ddd
        </Slide>
      );
    }
  }

  return <>{sliders}</>;
}
