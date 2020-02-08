import React, { Component } from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

//reference: https://www.freecodecamp.org/news/how-to-build-a-range-slider-component-in-react-from-scratch-using-only-div-and-span-d53e1a62c4a3/
//Bernardo-Castilho/dragdroptouch
//dragdroptouch - Polyfill that enables HTML5 drag drop support on mobile (touch) devices.github.com

const sliderContainer = styled.div`
  position: relative;
`;

const sliderSelectedScale = styled.div``;

const slide = styled.div`
  position: relative;
  user-select: none;
  margin-top: 10px;
`;

const sliderScale = styled.div``;

const sliderThumb = styled.div`
  position: absolute;
  background-color: gray;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  top: -8px;
  touch-action: none;
`;

export class slider extends Component {
  state = {
    slots: 24,
    start: 0,
    end: 10,
    labelMode: "mid"
  };

  render() {
    return <div></div>;
  }
}

export default slider;
