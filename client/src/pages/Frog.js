import React from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`
const Div = styled.div`
  background: blue;
   color: ${props => props.inputColor || "palevioletred"};
  height:500px;
  animation: 1s ${fadeIn} ease-out;
`;


const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const Frog = () => {

  return (
    <Div>
    <Paragraph>🐸🐸🐸🐸🐸🐸🐸🐸hello</Paragraph>
  </Div>
);
};

export default Frog;
