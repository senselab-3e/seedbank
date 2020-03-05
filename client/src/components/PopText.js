import React, { Component, PureComponent } from "react";
import { randomColors, uniquePositions } from "../helpers/popCalculators";
import { fontChoiceArray } from "../helpers/ArrayOptions";
import { chooseElement } from "../helpers/popCalculators";

class PopText extends PureComponent {
  render() {
    //function PopText({ event, className, randomPos }) {
    let newCoor = "";
    this.props.randomPos ? (newCoor = uniquePositions()) : (newCoor = [0, 0]);
    let coloring = "";
    this.props.className !== "defaultThingy"
      ? (coloring = randomColors())
      : (coloring = null);
    if (this.props.event.name) {
      return (
        <React.Fragment>
          <div
            className={this.props.className}
            id={this.props.event.name ? this.props.event.name : ""}
            style={{
              top: newCoor[0] + "px",
              left: newCoor[1] + "px",
              backgroundColor: coloring,
              fontFamily: chooseElement(fontChoiceArray)
            }}
          >
            <p>{this.props.event.name}</p>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div
            className={this.props.className}
            id={this.props.event.name ? this.props.event.name : ""}
            style={{
              top: newCoor[0] + "px",
              left: newCoor[1] + "px",
              backgroundColor: coloring
            }}
          >
            <p>{this.props.event}</p>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default PopText;
