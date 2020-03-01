import React from "react";
import { randomColors, uniquePositions } from "../helpers/popCalculators";

//this is just creating a quick condition so that if the default class is
//invoked the background color for randomcolor won't override the css for the background color of deeppink
//which is applied in index.css i want to see during development if something is missing as special class

function PopDiv({ event, className, randomPos, image, link }) {
  let newCoor = "";
  let backgroundImg = ""; // in case i ever want an image to be applied to the background tiling of a div
  let href = "";
  randomPos ? (newCoor = uniquePositions()) : (newCoor = [0, 0]);

  image ? (backgroundImg = `url(${image})`) : (backgroundImg = "");

  link ? (href = event) : (href = "");

  let coloring = "";
  className !== "defaultThingy"
    ? (coloring = randomColors())
    : (coloring = null);

  if (link === true) {
    return (
      <React.Fragment>
        <a
          href={href}
          className={className}
          id={event.name ? event.name : ""}
          backgroundimg={image ? backgroundImg : undefined}
          style={{
            top: newCoor[0] + "px",
            left: newCoor[1] + "px",
            backgroundColor: coloring
          }}
        >
          <></>
        </a>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div
          className={className}
          id={event.name ? event.name : ""}
          backgroundimg={image ? backgroundImg : undefined}
          style={{
            top: newCoor[0] + "px",
            left: newCoor[1] + "px",
            backgroundColor: coloring
          }}
        ></div>
      </React.Fragment>
    );
  }
}

export default PopDiv;
