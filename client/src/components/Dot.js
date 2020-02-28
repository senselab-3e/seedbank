import React from "react";

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let h, w, newheight, newwidth;

const uniquePositions = () => {
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  newheight = Math.floor(Math.random() * h);
  newwidth = Math.floor(Math.random() * w);

  return [newheight, newwidth];
};

// // const populate = array => {
// //   array.forEach(element => {});
// // };

// let elType = document.createElement("div");

function Dot({ event, className }) {
  let newCoor = uniquePositions();

  return (
    <div
      className={className}
      id={event.name ? event.name : ""}
      style={{
        top: newCoor[0] + "px",
        left: newCoor[1] + "px",
        backgroundColor: randomColor()
      }}
    >
      <p>{event.name}</p>
    </div>
  );
}

export default Dot;
