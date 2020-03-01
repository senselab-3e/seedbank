import React from "react";
import EventCreate from "./EventCreate";

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

//this is just creating a quick condition so that if the default class is
//invoked the background color for randomcolor won't override the css for the background color of deeppink
//which is applied in index.css i want to see during development if something is missing as special class

function Pop({ event, className, randomPos }) {
  let newCoor = "10px";
  randomPos ? (newCoor = uniquePositions()) : (newCoor = "10px");

  let coloring = "";
  className !== "defaultThingy"
    ? (coloring = randomColor())
    : (coloring = null);

  // let imgSrc = "";
  // className === "Images" ? (imgSrc = `url(${event})`) : (imgSrc = "");

  //src={imgSrc}
  // console.log(imgSrc);

  if (className !== "Images") {
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
        ></div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <img
          alt={EventCreate.id}
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
}

export default Pop;

/* <React.Fragment>
      <div
        className={className}
        id={event.name ? event.name : ""}
        style={{
          top: newCoor[0] + "px",
          left: newCoor[1] + "px",
          backgroundColor: coloring,
          backgroundImage: imgSrc
        }}
      >
        <p>{event.name}</p>
      </div>
    </React.Fragment> */
