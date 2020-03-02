import React from "react";
import { chooseElement } from "../helpers/popCalculators";
import { ArrayOptions } from "../helpers/ArrayOptions";
import { Link } from "react-router-dom";

//unfortunately react won't let me render things with a lower case.

export default function eeE00() {
  let linkArray = ArrayOptions("localLinks");
  let gifArray = ArrayOptions("gifVerse");
  //calls up the arry of local links
  let randomGlitchroute = chooseElement(linkArray);
  let randomGifs = chooseElement(gifArray);
  //choose random link from array of localLinks

  return (
    <div>
      HELLO
      <Link to={randomGlitchroute}>
        <img alt="spinning fan" src={randomGifs} className="huge"></img>
      </Link>
    </div>
  );
}
