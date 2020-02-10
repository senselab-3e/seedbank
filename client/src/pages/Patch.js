import React, { Component } from "react";
import patch from "../assets/img/threshold-1.gif";
// import patch2 from "../assets/img/threshold-2.gif";
import patch3 from "../assets/img/threshold-8.gif";
import { withTheme } from "styled-components";
import RandomLinkPlace from "../components/RandomLinkPlace";
import ArraySources from "../components/ArraySources";

export class Patch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patchlevelArray: ""
    };
  }

  //   const updateList = array =>
  //     this.setState({
  //       patchlevelArray: array
  //     });

  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }

  componentDidMount() {
    // updateList(this.props.test);
    this.setState({
      patchlevelArray: "hello"
    });
  }

  render() {
    return (
      <React.Fragment>
        <ArraySources updateArray={this.props.updateArray} arraytype="links" />
        <RandomLinkPlace />
        <img src={patch} alt="threshold" width="100px"></img>
        <img src={patch3} alt="threshold2" width="100px"></img>
      </React.Fragment>
    );
  }
}

export default withTheme(Patch);
