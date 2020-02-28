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

let newCoor = uniquePositions();
// let elType = document.createElement("div");

function Dot({ event }) {
  return (
    <div
      className="threshold"
      id={event.name ? event.name : ""}
      style={{
        top: newCoor[0] + "px",
        left: newCoor[1] + "px",
        backgroundColor: randomColor()
      }}
    >
      aa
    </div>
  );
}

export default Dot;
