import React, { useState } from "react";
import teapot from "../pot.jpg";

import Signature from "../components/Signature";

export default function SignIn() {
  const [sig, setSig] = useState("");

  const grabSignature = data => {
    setSig(data);
  };

  console.log(sig);
  return (
    <div>
      <div>
        <button onClick={() => console.log("clicking")}>CLICKING</button>
        <Signature grabSign={grabSignature} />
        <img className="Cup" src={teapot} alt="teapot"></img>
      </div>
    </div>
  );
}
