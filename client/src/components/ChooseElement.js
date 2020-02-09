import React from "react";

//syntax in parent =  <ChooseElement array = {array} />
const ChooseElement = props => {
  var element = props.array[Math.floor(Math.random() * props.array.length)];
  console.log(element);
  return <div>{element}</div>;
};

export default ChooseElement;
