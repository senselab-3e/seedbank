import React from "react";

import { uniquePositions } from "../helpers/popCalculators";

function PopImage({ event, className, randomPos }) {
  let newCoor = "";
  randomPos ? (newCoor = uniquePositions()) : (newCoor = [0, 0]);

  //by checking for truthy of image, i cover both 'false' and undefined - as in no prop for image was passed down at all

  return (
    <React.Fragment>
      <img
        alt={event}
        src={event}
        className={(className, "easeImage")}
        style={{
          top: newCoor[0] + "px",
          left: newCoor[1] + "px"
        }}
      ></img>
    </React.Fragment>
  );
}

export default PopImage;
