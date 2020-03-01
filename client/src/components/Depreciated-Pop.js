//this was how things were written when i tried to pass everything through one pop component. but it meant it was doing condition checks
//for every instance in an array, which was not efficient. it was better to check  img text div needs before passing things to pop components so changed it to split popimage popdiv and poptext component.

import React from "react";
// import EventCreate from "./EventCreate";
import { randomColors, uniquePositions } from "../helpers/popCalculators";

//this is just creating a quick condition so that if the default class is
//invoked the background color for randomcolor won't override the css for the background color of deeppink
//which is applied in index.css i want to see during development if something is missing as special class

function Pop({ event, className, randomPos, image, text }) {
  let newCoor = "10px";
  randomPos ? (newCoor = uniquePositions()) : (newCoor = "10px");

  let coloring = "";
  className !== "defaultThingy"
    ? (coloring = randomColors())
    : (coloring = null);

  //by checking for truthy of image, i cover both 'false' and undefined - as in no prop for image was passed down at all
  if (image) {
    return (
      <React.Fragment>
        <img
          alt={event.id}
          src={event}
          className={(className, "easeImage")}
          style={{
            top: newCoor[0] + "px",
            left: newCoor[1] + "px"
          }}
        ></img>{" "}
      </React.Fragment>
    );
  } else if (text) {
    console.log("placeholder for text element");
    return <div> text </div>;
  } else {
    return (
      <React.Fragment>
        <div
          className={className}
          id={event.name ? event.name : ""}
          style={{
            top: newCoor[0] + "px",
            left: newCoor[1] + "px",
            backgroundColor: coloring
          }}
        ></div>{" "}
      </React.Fragment>
    );
  }
}

export default Pop;
