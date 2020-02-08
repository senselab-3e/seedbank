import React, { Component } from "react";

export class Entryway extends Component {
  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }
  render() {
    return <div>WELCOME</div>;
  }
}

export default Entryway;
