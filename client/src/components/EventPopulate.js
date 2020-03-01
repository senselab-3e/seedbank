import React from "react";
import PopImage from "./PopImage";
import PopDiv from "./PopDiv";
import PopText from "./PopText";
import { v4 as uuidv4 } from "uuid";

function EventPopulate(props) {
  let localarray = [];
  let localclassName = "defaultThingy";

  //if array prop is undefined this local array is provided to ensures something valid is still passed down to the child
  props.array ? (localarray = props.array) : (localarray = []);

  //if no classname was specified a generic one is passed to the child
  props.className
    ? (localclassName = props.className)
    : (localclassName = "defaultThingy");

  //introduce this if you need a background image applied to a div, instead of an image
  //   props.imgSrc
  //     ? (localImgSrc = props.imgSrc)
  //     : console.log("default className being used");

  //NOTE: previously i'd been using event.id for the key value, but not all arrays will have an id paramenter--- particularly if passing client side array lists of links or img sources, so for now i'm just going to use uuid to generate them so that they're always unique and don't throw any warnings
  if (props.image) {
    return (
      <React.Fragment>
        {localarray.map(event => (
          <PopImage
            key={uuidv4()}
            event={event}
            className={localclassName}
            randomPos={props.randomPos}
          />
        ))}
      </React.Fragment>
    );
  } else if (props.text) {
    console.log("text positive");
    return (
      <React.Fragment>
        {localarray.map(event => (
          <PopText
            key={uuidv4()}
            event={event}
            className={localclassName}
            randomPos={props.randomPos}
          />
        ))}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {localarray.map(event => (
          <PopDiv
            key={uuidv4()}
            event={event}
            className={localclassName}
            randomPos={props.randomPos}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default EventPopulate;
