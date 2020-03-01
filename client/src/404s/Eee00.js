import React from "react";
import { chooseElement } from "../helpers/popCalculators";
import { ArrayOptions } from "../helpers/ArrayOptions";

//unfortunately react won't let me render things with a lower case.

export default function eeE00() {
  let linkArray = ArrayOptions("glitchLinks");
  //console.log(linkArray);
  let randomGlitchroute = chooseElement(linkArray);
  //console.log(opt404);

  return (
    <div>
      HELLO
      <a href={randomGlitchroute}>
        <img
          alt="spinning fan"
          src="https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2F4a81a730-df75-4524-9ba2-e483c4930018%20(1).gif?v=1576098062094"
        ></img>
      </a>
    </div>
  );
}
