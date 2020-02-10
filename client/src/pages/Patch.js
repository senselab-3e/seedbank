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
      patchlevelArray: [],
      isLogged: false
    };
  }

  componentDidMount() {
    this.props.updateLocation(window.location);
  }
  //this feels a little hack-y but this prevents an infinite loop of  the state of patchLevel Array
  //being set infinitely. first i check if isLogged is false. if it is it is the first time i am logging a prop for
  //the patchlevelArray. then isLogged from there on is set to true - preventing state for the array being set again.
  // however this still doesn't feel reliable, bc this means this is being checked many times... even if the state isn't being set repeatedly... refactor later perhaps.
  // i'm also not a fan of using all these lifecycles as it takes away from readability.
  componentDidUpdate() {
    if (!this.state.isLogged) {
      this.setState({
        patchlevelArray: this.props.test,
        isLogged: true
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <ArraySources updateArray={this.props.updateArray} arraytype="links" />
        <RandomLinkPlace array={this.state.patchlevelArray} classname={"dot"} />
        <img src={patch} alt="threshold" width="100px"></img>
        <img src={patch3} alt="threshold2" width="100px"></img>
      </React.Fragment>
    );
  }
}

export default withTheme(Patch);
