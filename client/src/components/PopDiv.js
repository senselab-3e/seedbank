import React from "react";
import { randomColors, uniquePositions } from "../helpers/popCalculators";

//this is just creating a quick condition so that if the default class is
//invoked the background color for randomcolor won't override the css for the background color of deeppink
//which is applied in index.css i want to see during development if something is missing as special class

function PopDiv({ event, className, randomPos, image }) {
  let newCoor = "10px";
  randomPos ? (newCoor = uniquePositions()) : (newCoor = "10px");

  let coloring = "";
  className !== "defaultThingy"
    ? (coloring = randomColors())
    : (coloring = null);

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

export default PopDiv;
