import React, { Component } from "react";
import patch from "../assets/img/threshold-1.gif";
// import patch2 from "../assets/img/threshold-2.gif";
import patch3 from "../assets/img/threshold-8.gif";
import { withTheme } from "styled-components";
import RandomLinkPlace from "../components/RandomLinkPlace";
import ArraySources from "../components/ArraySources";

export class Patch extends Component {
  state = {
    array: []
  };

  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }

  componentDidMount() {
    this.setState({
      array: this.props.array
    });
  }

  render() {
    return (
      <React.Fragment>
        <ArraySources arraytype={"link"} />
        <RandomLinkPlace />
        <img src={patch} alt="threshold" width="100px"></img>
        <img src={patch3} alt="threshold2" width="100px"></img>
      </React.Fragment>
    );
  }
}

export default withTheme(Patch);
