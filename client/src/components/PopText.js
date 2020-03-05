import React from "react";
import { randomColors, uniquePositions } from "../helpers/popCalculators";
import { fontChoiceArray } from "../helpers/ArrayOptions";
import { chooseElement } from "../helpers/popCalculators";
import { withTheme } from "styled-components";
//this is just creating a quick condition so that if the default class is
//invoked the background color for randomcolor won't override the css for the background color of deeppink
//which is applied in index.css i want to see during development if something is missing as special class

//right now the array of font choices are being enabled by having the links to their style sheets in google, all listed in the index.html
//this isn't 'the most efficient' or mindful of loading times, but for the moment this is just proof of concepts

function PopText({ event, className, randomPos, theme }) {
  let newCoor = "";
  //console.log(event, "check if these texts need any scrubbing or cleaning up");
  randomPos ? (newCoor = uniquePositions()) : (newCoor = [0, 0]);
  let coloring = "";
  className !== "defaultThingy"
    ? (coloring = randomColors())
    : (coloring = null);

  let mode = "";
  theme.mode === "light" ? (mode = "none") : (mode = "block");

  //if i'm dealing with text from the database -- i need to reach inside the array event for event.name etc
  //if i'm dealing with a client side array only -- a simple array -- i can just put 'event' in the p tags below.
  //find a more elegant way to check for this in the future. db = true?

  //let test = [1, 2, 3, 4, 5]; //both this array and event {} from db return as objects. a quark of javascript :/
  //this isn't so elegant but for now if event name which is usually the association with the database returned values, it will process it differently.
  if (event.name) {
    return (
      <React.Fragment>
        <div
          className={className}
          id={event.name ? event.name : ""}
          style={{
            top: newCoor[0] + "px",
            left: newCoor[1] + "px",
            backgroundColor: coloring,
            fontFamily: chooseElement(fontChoiceArray),
            display: mode
          }}
        >
          <p>{event.name}</p>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div
          className={className}
          id={event.name ? event.name : ""}
          style={{
            top: newCoor[0] + "px",
            left: newCoor[1] + "px",
            backgroundColor: coloring,
            display: mode
          }}
        >
          <p>{event}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default withTheme(PopText);
