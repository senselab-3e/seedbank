import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import axios from "axios";

export default function SliderContainer(props) {
  // const [sliderAmt, setAmount] = useState(
  //   props.amtSliders ? props.amtSliders : 0
  // );
  const [indivColor, setColor] = useState(props.indivColor);
  const [textObj, setText] = useState([]);
  //const [sliderAmt, setAmount] = useState(textObj ? textObj.length : 0);
  const [sliderAmt, setAmount] = useState(0);

  const getbyId = (id) => {
    axios
      .get("/api/events")
      .then((events) => {
        setText(events.data);
        //console.log(events.data);
        for (const key in textObj) {
          if (textObj[key].id === id) {
            setText(textObj[key].name);
            //console.log(textObj[key].name, id);
          }
          // console.log(element.id);
        }
        // setText({
        //   events: events.data,
        // });
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   let id = 7;
  //   getbyId(id);
  // }, []);

  // useEffect(() => {
  // axios
  //   .get("/api/events")
  //   .then((events) => {
  //     setText(events.data);
  //     // setText({
  //     //   events: events.data,
  //     // });
  //   })
  //   .catch((err) => console.log(err));
  // }, []);

  // console.log(textObj.length);

  // for (const key in textObj) {
  //   if (textObj[key].id === 1) {
  //     console.log(textObj[key].name, textObj[key].data);
  //   }
  //   // console.log(element.id);
  // }
  //console.log(textObj.events);

  //We don’t want to load the events each time the component re-renders, so we pass an empty array as second argument.

  //the hooks will not update on their own - despite the props value changing. it only runs on load. so this
  //is a quick way to have it update the value being passed into the components below, if it is a different value. it's a bit more stable
  // because then the prop valuing isn't just passing over and over continuously -- but the color value IS changing conintuously, so it doesn't make that much of difference. but retaining the same pattern logic for legibility.
  if (props.amtSliders !== sliderAmt) {
    setAmount(props.amtSliders);
  }

  // if (sliderAmt !== textObj.length) {
  //   setAmount(textObj.length);
  //   setColor(props.indivColor);
  // }

  if (props.indivColor !== indivColor) {
    setColor(props.indivColor);
  }
  //i moved to passing the props value directly into the colors and slider amounts, so it would update immediately and not need  a hooks reassignment

  let slideSet = [];
  for (let i = 0; i < sliderAmt; i++) {
    slideSet.push(
      <Slider key={i.toString()} color={indivColor} textContent={"test"} />
    );
  }

  return <div className="sliderContainer"> {slideSet} </div>;
}
