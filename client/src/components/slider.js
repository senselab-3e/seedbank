import React, { Component } from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

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
