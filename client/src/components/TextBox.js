import React, { useState, useEffect } from "react";
import Text from "../components/Text";

export default function TextBox(props) {
  //you need to pass a prop function down to this ///  that will take the text submitted to it. post it to axios, then.... sent that text to the slider /// OR just have it added to the array of object text it's already grabbing from. but if i want to synch the creation of a new pallete with the text... then here's where i need to pass around some things.
  // with axios i will need to follow each reques for data with an onChange()

  const [inputVal, setInput] = useState(null);
  const [subVal, setVal] = useState(inputVal);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("handlesubmit inputVal", inputVal);
    if (inputVal) {
      props.funcSubCap(inputVal);
      setVal(inputVal);
    }
    //setVal(inputVal),

    //send subVal to axios or callback function
  };
  //console.log("handlesubmit subVal", subVal);

  const handleChange = (e) => {
    e.preventDefault();
    e.target.value !== null
      ? setInput(e.target.value)
      : console.log("no value entered");
    //setVal()
  };

  // useEffect(() => {
  //   setColor(props.indivColor);
  // }, [props.indivColor]);

  return (
    <div className="textSub-container">
      <Text></Text>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
