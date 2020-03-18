import React from "react";

import { randomColors, uniquePositions } from "../helpers/popCalculators";
import { withTheme } from "styled-components";
// import { bubbles } from "../context/theme";

//the passing of the prop 'theme' below, is coming from the withTheme of styled components - (which see the wrapper of the export below) this is just creating a quick condition so that if the default class is
//invoked the background color for randomcolor won't override the css for the background color of deeppink
//which is applied in index.css i want to see during development if something is missing as special class

function PopDiv({ event, className, randomPos, image, link, theme }) {
  let newCoor = "";
  let backgroundImg = ""; // in case i ever want an image to be applied to the background tiling of a div
  let href = "placeholder";
  let textFiller = null;
  randomPos ? (newCoor = uniquePositions()) : (newCoor = [0, 0]);

  image ? (backgroundImg = `url(${image})`) : (backgroundImg = "");

  link ? (href = event) : (href = "");

  let coloring = "";
  className !== "defaultThingy"
    ? (coloring = randomColors())
    : (coloring = null);

  // this <></>  is necessary to keep the anchor tag from being empty and throwing errors. introduce a better solution in the future

  //i shouldn't have to pass down the them mode when i can just access the theme values directly - whcih display according to the global state
  // ALL of this should be refactored with styled components - then it'll be easier to harness the global theme switches.
  //display mode is managed here, for threshold divs if theme mode is light or dark
  let mode = "";
  theme.mode === "light" ? (mode = "none") : (mode = "block");

  const handleClick = e => {
    e.target.classList.remove("lines");
    e.target.classList.add("textline");
  };

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
            backgroundColor: coloring,
            display: mode
          }}
          onClick={e => handleClick(e)}
        >
          {textFiller}
        </div>
      </React.Fragment>
    );
  }
}

export default withTheme(PopDiv);
