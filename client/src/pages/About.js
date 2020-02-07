import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
import styled from "styled-components";

const Cup = styled.img`
  width: 40%;
`;

class About extends Component {
  state = {
    location: ""
  };
  //I'm trying out componentWillMount() so that the current location is passed up immediately to App, but this fires before anything else has loaded on the page. investigate docs for any shortcomings to this approach
  componentWillMount() {
    this.props.updateLocation(window.location);
  }
  // componentDidMount() {
  //   this.props.updateLocation(window.location);
  // }
  render() {
    return (
      <div>
        <div className="centerAlign">
          <Cup src={teapot} alt="teapot"></Cup>
        </div>
      </div>
    );
  }
}

export default About;
