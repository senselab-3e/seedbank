import React from "react";
import Dot from "./Dot";

//let h, w, newheight, newwidth;

// const uniquePositions = () => {
//   h = window.innerHeight - 100;
//   w = window.innerWidth - 100;
//   newheight = Math.floor(Math.random() * h);
//   newwidth = Math.floor(Math.random() * w);

//   return [newheight, newwidth];
// };

// const populate = array => {
//   array.forEach(element => {});
// };

function EventPopulate(props) {
  let localarray = [];

  props.array ? (localarray = props.array) : console.log("no array");
  console.log(localarray);

  return (
    <div>
      {localarray.map(event => (
        <Dot key={event.id} event={event} className={props.className} />
      ))}
    </div>
  );
}

export default EventPopulate;
