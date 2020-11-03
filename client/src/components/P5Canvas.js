import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch1 from "./p5/sketch1";

export class P5Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlUploadImg: this.props.urlUploadImg,
      saveImage: this.props.saveImage,
    };
  }

  componentDidUpdate() {
    if (this.props.urlUploadImg !== this.state.urlUploadImg) {
      this.setState({ urlUploadImg: this.props.urlUploadImg });
    }
    if (this.props.saveImage !== this.state.saveImage) {
      this.setState({ saveImage: this.props.saveImage });
    }
  }

  //the props.saveStatus is  function the resets the saveImage truthy value to false, inside the p5 sketch, after its truthy value + a valid image object, allows it to save/export of an image of the current canvas. This is so it exports once and resets.

  render() {
    return (
      <P5Wrapper
        sketch={sketch1}
        imgSource={this.state.urlUploadImg}
        saveImage={this.state.saveImage}
        saveStatus={this.props.saveStatus}
      />
    );
  }
}

export default P5Canvas;
