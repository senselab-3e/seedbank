import React, { Component } from "react";
//import styled from "styled-components""";
import LinkElementCreator from "./LinkElementCreator";

var linkList = [
  "ecologyofvidz.html",
  "mondayfiles.html",
  "oz-glob.html",
  "pink.html",
  "spincycle.html",
  "swerve.html"
];

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let h, w, nh, nw, s;

const newPosition4Circles = () => {
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);

  return [nh, nw, s];
};

// const target = document.querySelector("#target");

const createLinks = () => {
  linkList.forEach(txt2 => {
    var newLinkDot = document.createElement("div");
    newLinkDot.className = "dot";
    newLinkDot.style.backgroundColor = randomColor();
    var a = document.createElement("a");
    a.href = "https://convalizards.glitch.me/" + txt2;
    a.className = "dotlinks";
    a.appendChild(newLinkDot);
    document.body.append(a);
  });
};

//ok. not ideal. right now because the elements are being dynamically created and appended outside any of the component rendering, they are actually all loading from the beginning.
//when the route is left, they are all persisting on screen. that's a little ok because it's still an intereseting effect but this will have to be figure out for the picture element version of this, rather then these small pixels
//the styling also needs to be managed by styled-components in future refactoring

export class RandomLinkPlace extends Component {
  componentDidMount() {
    createLinks();
  }
  render() {
    const dotpatches = document.querySelectorAll(".dot");

    const dotRandPos = () => {
      dotpatches.forEach(function(patch) {
        var newCoor4 = newPosition4Circles();
        patch.style.top = newCoor4[0] + "px";
        patch.style.left = newCoor4[1] + "px";
      });
    };

    dotRandPos();
    setInterval(dotRandPos, 3000);
    return (
      <div>
        <div id="target"></div>
        <LinkElementCreator linkList={linkList} />
      </div>
    );
  }
}

export default RandomLinkPlace;
