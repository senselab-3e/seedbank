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
    if (loc !== null) {
      console.log(loc, "valid");
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
