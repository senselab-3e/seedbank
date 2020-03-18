import React from "react";
import { chooseElement } from "../helpers/popCalculators";
import { uniquePositions } from "../helpers/popCalculators";
import { withTheme } from "styled-components";
import { imgThingies } from "../helpers/ArrayOptions";
// import styled from "styled-components";

function PopImage({ event, className, randomPos, link, theme, name }) {
  //however, by relying on state, it's refreshing the location too.. which isn't ideal
  const popImageSrc = event;

  // if (className === "threshold"){

  // }

  let newCoor = "";
  randomPos ? (newCoor = uniquePositions()) : (newCoor = [0, 0]);
  let href = "";

  // eslint-disable-next-line

  //this is not a catch all -- there will likely be a case where the link list will be different then the 'event' list which is currently the list of image sources
  // I need to think about a reusable scalable way to pass both a list of image sources and link sources.

  link ? (href = event) : (href = "");
  // eslint-disable-next-line

  //by checking for truthy of image, i cover both 'false' and undefined - as in no prop for image was passed down at all

  //all these create conditional displays based on the current theme mode being provided by the Global Provider. but I'm no longer interested in using it in this way...
  let mode = "display";
  //console.log(name);
  theme.mode === "light" && name === "bound"
    ? (mode = "block")
    : (mode = "block");

  const setNewImage = e => {
    e.target.src = chooseElement(imgThingies);
    //console.log(.offsetLeft);
    //console.log(e.target.getBoundingClientRect());
    e.target.left = e.target.left + e.target.offsetLeft;
    console.log(e.target.offsetTop);
    e.target.top = e.target.top + e.target.offsetTop;
  };

  //set this second one to mode= "none" to have the conditional viewable

  // theme.mode === "dark" && name === "thingies"
  //   ? (mode = "block")
  //   : (mode = "none");

  //NOTES: ADD DIFFERENT RETURNS BASED ON IF LINK INFO IS NEEDED. see construction in POPDIV

  if (link === true) {
    return (
      <React.Fragment>
        <a href={href}>
          <img
            alt={event}
            src={popImageSrc}
            className={className}
            style={{
              top: newCoor[0] + "px",
              left: newCoor[1] + "px"
            }}
          ></img>
        </a>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <img
          alt={event}
          src={popImageSrc}
          className={className}
          style={{
            top: newCoor[0] + "px",
            left: newCoor[1] + "px",
            display: mode
          }}
          onClick={e => {
            setNewImage(e);
            //e.target.getBoundingClientRect()
            //setPopImage(chooseElement(imgThingies));
          }}
          onTouchEnd={e => {
            setNewImage(e);
          }}
        ></img>
      </React.Fragment>
    );
  }
}
export default withTheme(PopImage);
