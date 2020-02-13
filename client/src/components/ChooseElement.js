import React from "react";

//syntax in parent =  <ChooseElement array = {array} />
const ChooseElement = props => {
  //   console.log(props.array, "full array passing to choose element component");
  var element;
  //i need this condition check because on the first two passes of ChooseElement being rendered above by parents, this is an undefined property - so it
  //will continuously throw errors //then i need to site specifically the value props.array and not just props, because props is a long list of items in an object /// a catch all unique to functional components - where as props.array refects what i more exactly passed to this component from a parent element.
  if (props.array) {
    element = props.array[Math.floor(Math.random() * props.array.length)];
    props.updateArray(element);
  } else {
    console.log("no array prop is happening");
  }
  return <div></div>;
};

export default ChooseElement;
