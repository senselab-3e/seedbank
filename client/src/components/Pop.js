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

function Pop({ event, className, randomPos }) {
  let newCoor = "10px";
  console.log(randomPos, "position status");
  randomPos ? (newCoor = uniquePositions()) : (newCoor = "10px");

  let coloring = "";
  className !== "defaultThingy"
    ? (coloring = randomColor())
    : (coloring = null);

  //this is just creating a quick condition so that if the default class is
  //invoked the background color for randomcolor won't override the css for the background color of deeppink
  //which is applied in index.css i want to see during development if something is missing as special class

  return (
    <React.Fragment>
      <div
        className={className}
        id={event.name ? event.name : ""}
        style={{
          top: newCoor[0] + "px",
          left: newCoor[1] + "px",
          backgroundColor: coloring
        }}
      >
        <p>{event.name}</p>
      </div>
    </React.Fragment>
  );
}

export default Pop;
