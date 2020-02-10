import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Div = styled.div`
  background: blue;
   color: ${props => props.inputColor || "palevioletred"};
  width: 10px;
  height:500px;
  /* &:hover {
   width:100%
 } */
`;


const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const Frog = () => {

  return (
    <Div
    onClick={() => this.setState({ inputColor: "red" })}>
    <Paragraph>🐸🐸🐸🐸🐸🐸🐸🐸hello</Paragraph>
  </Div>
);
};

export default Frog;
