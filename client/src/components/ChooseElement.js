import React from "react";

const ChooseElement = props => {
  var element = props.array[Math.floor(Math.random() * props.array.length)];
  return <div>{element}</div>;
};

export default ChooseElement;
