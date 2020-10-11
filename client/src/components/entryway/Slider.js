import React, { useState, useEffect } from "react";
import Slide from "./Slide";

export default function Slider(props) {
  //console.log("SLIDER CHILD LEVEL db res:", props.dataList);
  // eslint-disable-next-line
  const [currentPaletteNum, setPalNum] = useState(12);

  // eslint-disable-next-line
  const [dataList, setDataList] = useState(props.dataList);
  const sliders = [];

  useEffect(() => {
    setDataList(props.dataList);
  }, [props.dataList]);

  for (const key in dataList) {
    sliders.push(<Slide key={key} text={dataList[key].body}></Slide>);
  }

  return <>{sliders}</>;
}
