import React from "react";
import Dot from "./Dot";

//NOTE: the classname needs to be specified from the parent component so the shape of whatever is rendered happens okay
function EventPopulate(props) {
  let localarray = [];
  let localclassName = "defaultThingy";

  props.array ? (localarray = props.array) : console.log("no array");
  console.log(localarray);

  props.className
    ? (localclassName = props.className)
    : console.log("defaul className being used");

  return (
    <div>
      {localarray.map(event => (
        <Dot key={event.id} event={event} className={localclassName} />
      ))}
    </div>
  );
}

export default EventPopulate;
