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

export class Glitch extends Component {
  randomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // elementsExist = () => {
  //   if (document.querySelectorAll(".locationmark").length > 1) {
  //     this.populate(this.props.minorLocations);
  //   } else {
  //     return false;
  //   }
  // };

  populate = loc => {
    //console.log(loc);
    if (loc !== null && document.querySelectorAll(".locationmark").length < 1) {
      console.log(loc, "valid");
      //ineed to create a condition check so it doesn't repeatedly add more dynamic elements

      for (const key in loc) {
        console.log();
        var newElement = document.createElement("div");
        newElement.className = "locationmark";
        newElement.textContent = key;
        newElement.style.backgroundColor = this.randomColor();
        let linkWrapper = document.createElement("a");
        linkWrapper.className = "locationmarkcontainer";
        linkWrapper.appendChild(newElement);
        document.body.append(linkWrapper);
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
