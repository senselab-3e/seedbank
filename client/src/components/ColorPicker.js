import React, { Component } from "react";
import { SketchPicker } from 'react-color';

class Colorality extends Component {
  state = {
    color: { r: 51, g: 51, b: 51 },
  };

  handleChangeComplete = (color) => {
    this.setState({ color: color.rgb });
    this.props.parentCallback(this.state.color);
  };

  render() {
    return (
      <SketchPicker
        color= {this.state.color}
        onChangeComplete={ this.handleChangeComplete }
      />

    );
  }
}
export default Colorality
