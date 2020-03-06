import React, { useState } from "react";
import teapot from "../pot.jpg";

import Signature from "../components/Signature";
import SendSig from "../components/SendSig";

export default function SignIn() {
  const [sig, setSig] = useState("");

  const grabSignature = data => {
    setSig(data);
  };

  const handleChange = props => {
    console.log(props, "handlechange");
    // if (props !== "") {
    //   //it's an object so you can't do a simple slice
    //   // console.log(props.data.path, "afterslice");
    //   // props.data.path = props.data.path.splice(0, 75);
    //   // console.log(props.data.path, "checkslice");
    //   this.setState({
    //     color: props.color,
    //     path: props.path,
    //     logged: true
    //   });
    // } else {
    //   console.log("nothing to log");
    // }
  };

  //console.log(sig);
  return (
    <div>
      <div>
        <button onClick={() => handleChange(sig)}>CLICKING</button>
        <Signature grabSign={grabSignature} />
        <SendSig sigData={sig} />
        <img className="Cup" src={teapot} alt="teapot"></img>
      </div>
    </div>
  );
}
