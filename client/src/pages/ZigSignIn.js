import React, { useState } from "react";
import teapot from "../pot.jpg";
import axios from "axios";

import Signature from "../components/Signature";
import SendZig from "../components/SendZig";

export default function SignIn() {
  const [sig, setSig] = useState("");
  const [color, setColor] = useState("");
  const [path, setPath] = useState("");

  const grabSignature = fullSigData => {
    setSig(fullSigData);
  };

  //NOTE: I was forced to place all this in a parent to the p5 component stuff, rather then in an adjascent component, because the mouse down tracking in the p5 was undoing the ability of the submit button to be recognizex
  //no idea why the zig route isn't working
  const submit = () => {
    console.log("zigs being sent");
    axios
      .post("/api/zigs/signatures", {
        color: color,
        path: path
      })
      //   .then(signatures => {
      //     console.log("Added signature: " + signatures);
      //   })
      .catch(err => {
        console.log(err);
      });
    // //this.props.checkForUpdates(); // this was for updating the list view of events - not applicable in this case
  };

  const handleChange = props => {
    console.log(props, "handlechange");

    if (props !== "") {
      setColor(props.color);
      setPath(props.path);
      submit();
      //it's an object so you can't do a simple slice
      // console.log(props.data.path, "afterslice");
      // props.data.path = props.data.path.splice(0, 75);
      // console.log(props.data.path, "checkslice");
    } else {
      console.log("nothing to log");
    }
  };

  console.log(color, path, "hello");

  //console.log(sig);
  return (
    <div>
      <div>
        <div className="wrapper">
          <button onClick={() => handleChange(sig)}>Submit Signature</button>
        </div>
        <Signature grabSign={grabSignature} />
        <SendZig sigData={sig} />
        <img className="Cup" src={teapot} alt="teapot"></img>
      </div>
    </div>
  );
}
