import React, { Component } from "react";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import styled from "styled-components";
//import ArraySources from "../components/ArraySources";

const Portal404 = styled.img`
  border: 2px solid transparent;
  &:hover {
    border: 2px solid teal;
  }
`;

const Tiny = styled.img`
  width: 30px;
  height: 30px;
  margin: 300px;

  border: 1px solid transparent;
  &:hover {
    border: 1px solid orange;
  }
`;

const GlitchWrapper = styled.div`
  text-align: center;
`;

const boundImages = [
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-1.gif?v=1576614642137",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-2.gif?v=1576614644341",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-3.gif?v=1576614647485",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-4.gif?v=1576614650930",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-5.gif?v=1576614655396",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-6.gif?v=1576614657211",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-7.gif?v=1576614661548",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-8.gif?v=1576614664942",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-9.gif?v=1576614668971",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-10.gif?v=1576614672614",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-11.gif?v=1576614675914",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-12.gif?v=1576614684834",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-13.gif?v=1576614686762",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-14.gif?v=1576614690245"
];

function chooseElement(assets) {
  var element = assets[Math.floor(Math.random() * assets.length)];
  return element;
}

let h, w, newheight, newwidth;

function uniquePositions() {
  h = window.innerHeight - 100;
  w = window.innerWidth - 100;
  newheight = Math.floor(Math.random() * h);
  newwidth = Math.floor(Math.random() * w);

  return [newheight, newwidth];
}

export class Glitch extends Component {
  randomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  populate = loc => {
    //console.log(loc);
    if (loc !== null && document.querySelectorAll(".locationmark").length < 1) {
      console.log(loc, "valid");
      //ineed to create a condition check so it doesn't repeatedly add more dynamic elements

      for (const key in loc) {
        console.log();

        var newElement = document.createElement("img");
        newElement.className = "location";
        newElement.src = chooseElement(boundImages);

        var newCoor4 = uniquePositions();
        newElement.style.top = newCoor4[0] + "px";
        newElement.style.left = newCoor4[1] + "px";
        let linkWrapper = document.createElement("a");
        linkWrapper.className = "locationcontainer";
        //the reason there is a disjunction in the positioning of the image and the text is because the image is being scaled down to 0.2 in the code, but the position is still according to its original diameter. so i suspect the ext is overlying where the image at full size would be -- which is why they're all hanging out at the top left.
        linkWrapper.style.top = newCoor4[0] + "px";
        linkWrapper.style.left = newCoor4[1] + "px";
        linkWrapper.textContent = key;
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
        //---> dot with text rendering version of processing event locations
        // var newElement = document.createElement("div");
        // newElement.className = "locationmark";
        // newElement.textContent = key;
        // newElement.style.backgroundColor = this.randomColor();
        // let linkWrapper = document.createElement("a");
        // linkWrapper.className = "locationmarkcontainer";
        // linkWrapper.appendChild(newElement);
        // document.body.append(linkWrapper);
      }
    }
  };

  //I'm trying out componentWillMount() insted of componentDidMount() so that the current location is passed up immediately to App, but this fires before anything else has loaded on the page. investigate docs for any shortcomings to this approach
  componentDidMount() {
    this.props.updateLocation(window.location);
    this.populate(this.props.minorLocations);
  }
  render() {
    return (
      <div>
        <GlitchWrapper>
          <Portal404 src={glitch} alt="portal" />
          <Tiny src={glitch} alt="portal2"></Tiny>
        </GlitchWrapper>
      </div>
    );
  }
}

export default Glitch;
