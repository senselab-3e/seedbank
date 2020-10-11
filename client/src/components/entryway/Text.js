import React from "react";

export default function Text(props) {
  console.log(props.text, "hello");
  return <div className="textBox">{props.text}</div>;
}
