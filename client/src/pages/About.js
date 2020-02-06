import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
import styled from "styled-components";

const Cup = styled.img`
  width: 40%;
`;

class About extends Component {
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
