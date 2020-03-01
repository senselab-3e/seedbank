import React from "react";

import { uniquePositions } from "../helpers/popCalculators";

function PopImage({ event, className, randomPos, link }) {
  let newCoor = "";
  randomPos ? (newCoor = uniquePositions()) : (newCoor = [0, 0]);
  let href = "";

  link ? (href = event) : (href = "");

  //by checking for truthy of image, i cover both 'false' and undefined - as in no prop for image was passed down at all

  //NOTES: ADD DIFFERENT RETURNS BASED ON IF LINK INFO IS NEEDED. see construction in POPDIV

  return (
    <React.Fragment>
      <img
        alt={event}
        src={event}
        className={className}
        style={{
          top: newCoor[0] + "px",
          left: newCoor[1] + "px"
        }}
      ></img>
    </React.Fragment>
  );
}
export default PopImage;
