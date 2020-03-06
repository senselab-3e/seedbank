import React, { useState } from "react";
import teapot from "../pot.jpg";

import Signature from "../components/Signature";

export default function SignIn() {
  //const [sig, setSig] = useState("");
  return (
    <div>
      <div>
        <button onClick={() => console.log("clicking")}>CLICKING</button>
        <Signature />
        <img className="Cup" src={teapot} alt="teapot"></img>
      </div>
    </div>
  );
}
