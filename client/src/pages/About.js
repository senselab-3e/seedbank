import React, { Component } from "react";
import teapot from "../assets/img/pot.jpg";
import styled from "styled-components";

const Cup = styled.img`
  width: 40%;
`;

class About extends Component {
  state = {
    location: "",
    apples: ""
  };

  componentDidMount() {
    //this.setState({ location: this.props.location });
    // this.setState({ apples: this.props.apples });
    //this.setState({ location: this.props.location });
    this.props.updateLocation(window.location);

    // console.log(this.props.updateLocation);
    // console.log(window.location.pathname, "apples");
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
