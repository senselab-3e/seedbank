import React, { useState } from "react";
import teapot from "../pot.jpg";

import Signature from "../components/Signature";
import SendSig from "../components/SendSig";

export default function SignIn() {
  const [sig, setSig] = useState("");
  const [color, setColor] = useState("");
  const [path, setPath] = useState("");

  const grabSignature = data => {
    setSig(data);
  };

  const handleChange = props => {
    console.log(props, "handlechange");
    if (props !== "") {
      setColor(props.color);
      setPath(props.path);
      //submit()
      //it's an object so you can't do a simple slice
      // console.log(props.data.path, "afterslice");
      // props.data.path = props.data.path.splice(0, 75);
      // console.log(props.data.path, "checkslice");
    } else {
      console.log("nothing to log");
    }
  };

  console.log(color, path);

  //   submit(e) {
  //     console.log("sig being sent", e);
  //     // e.preventDefault();
  //     // axios
  //     //   .post("/api/signatures", {
  //     //    color: this.state.color,
  //     //     path: this.state.path
  //     //   })
  //     //   .then(event => {
  //     //     console.log("Added signature: " + event);
  //     //   })
  //     //   .catch(err => {
  //     //     console.log(err);
  //     //   });
  //     // //this.props.checkForUpdates(); // this was for updating the list view of events - not applicable in this case
  //   }

  //console.log(sig);
  return (
    <div>
      <div>
        <div className="wrapper">
          <button onClick={() => handleChange(sig)}>Submit Signature</button>
        </div>
        <Signature grabSign={grabSignature} />
        <SendSig sigData={sig} />
        <img className="Cup" src={teapot} alt="teapot"></img>
      </div>
    </div>
  );
}
