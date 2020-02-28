import React from "react";
import Pop from "./Pop";
import { v4 as uuidv4 } from "uuid";

function EventPopulate(props) {
  let localarray = [];
  let localclassName = "defaultThingy";
  //   let localImgSrc = "";

  //if array prop is undefined this local array is provided to ensures something valid is still passed down to the child
  props.array ? (localarray = props.array) : console.log("no array");
  //   console.log(localarray);

  //if no classname was specified a generic one is passed to the child
  props.className
    ? (localclassName = props.className)
    : (localclassName = "defaultThingy");

  //   props.imgSrc
  //     ? (localImgSrc = props.imgSrc)
  //     : console.log("default className being used");

  //NOTE: previously i'd been using event.id for the key value, but not all arrays will have an id paramenter--- particularly if passing client side array lists of links or img sources, so for now i'm just going to use uuid to generate them so that they're always unique and don't throw any warnings
  return (
    <div>
      {localarray.map(event => (
        <Pop
          key={uuidv4()}
          event={event}
          className={localclassName}
          randomPos={props.randomPos}
        />
      ))}
    </div>
  );
}

export default EventPopulate;
