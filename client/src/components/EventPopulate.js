import React from "react";
import PopImage from "./PopImage";
import PopDiv from "./PopDiv";
import PopText from "./PopText";
import { v4 as uuidv4 } from "uuid";

//NOTES: to use this component currently :: look at Thingies component for examples
// array={ArrayOptions("thingies")}
// className={"line"}
// randomPos={true}
// link={true}
//image={true}

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

  //i'm in including a 'not props.text' in case an image prop is added to what is intended as only a popText - if an image prop is present and a text prop, it will ignore it and only observe the image prop
  if (props.image && !props.text) {
    return (
      <React.Fragment>
        {localarray.map(event => (
          <PopImage
            key={uuidv4()}
            event={event}
            className={localclassName}
            randomPos={props.randomPos}
            link={props.link}
            name={props.name}
          />
        ))}
      </React.Fragment>
    );
  } else if (props.text) {
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
            link={props.link}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default EventPopulate;
