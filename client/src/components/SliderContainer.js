import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import axios from "axios";

export default function SliderContainer(props) {
  // const [sliderAmt, setAmount] = useState(
  //   props.amtSliders ? props.amtSliders : 0
  // );

  const [indivColor, setColor] = useState("#333");
  const [textData, setData] = useState("orange");
  const [textObj, setText] = useState("textEmpty");
  //const [sliderAmt, setAmount] = useState(textObj ? textObj.length : 0);
  const [sliderAmt, setAmount] = useState(props.amtSliders);

  //let id = 7;
  // let refId = useRef(id); this is the direction i go if i want to quote a specific index - -but since i want things to be connected to the sliders --- i need the state changes in this number rendered --- aka use useState --

  useEffect(() => {
    setAmount(props.amtSliders);
  }, [props.amtSliders]); ///every time a change in this prop is detected a callback is trigered and the state is re set.

  console.log(sliderAmt);

  useEffect(() => {
    setColor(props.indivColor);
  }, [props.indivColor]);

  //console.log(id);
  useEffect(() => {
    axios
      .get("/api/events")
      .then((events) => {
        setData(events.data);
        console.log(events.data[sliderAmt].name);
        events.data[sliderAmt].name
          ? setText(events.data[sliderAmt].name)
          : setText("no Text content");
        //setText(events.data[refId.current].name);
        //ALT1: if i want to randomly choose which text is added.
        // console.log(
        //   events.data[
        //     Math.floor(Math.random(events.data.length) * events.data.length)
        //   ].name
        // );

        //ALT2: if i want to index a specific key/name combo in relation to an id
        // for (const key in events.data) {
        //   if (events.data[key].id === refId.current) {
        //     setText(events.data[key].name);
        //   }
        // }
      })
      .catch((err) => console.log(err));
  }, [sliderAmt]);

  console.log(textData);
  console.log(textObj, "iddd");

  //We don’t want to load the events each time the component re-renders, so we pass an empty array as second argument.

  // console.log(indivColor);
  //i moved to passing the props value directly into the colors and slider amounts, so it would update immediately and not need  a hooks reassignment

  let slideSet = [];
  for (let i = 0; i < sliderAmt; i++) {
    slideSet.push(
      <Slider key={i.toString()} color={indivColor} textContent={textObj} />
    );
  }

  return <div className="sliderContainer"> {slideSet} </div>;
}
