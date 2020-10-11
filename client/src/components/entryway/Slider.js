import React, { useState, useEffect } from "react";
//import axios from "axios";
import Slide from "./Slide";

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
      <Slide key={key} text={dataList[key].body}>
        ddd
      </Slide>
    );
  }

  return <>{sliders}</>;
}
