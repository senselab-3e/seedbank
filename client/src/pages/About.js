import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
import styled from "styled-components";

const Cup = styled.img`
  width: 40%;
`;

class About extends Component {
  state = {
    apples: ""
  };

  componentDidMount() {
    this.setState({ location: this.props.location });
    this.props.updateLocation(this.state.apples);
    console.log(this.props.testprop);
  }
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
