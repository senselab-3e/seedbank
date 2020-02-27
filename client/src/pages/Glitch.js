import React from "react";
// import { GlobalContext } from "../context/GlobalState";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import { AddEvent } from "../components/AddEvent";
import { EventListlings } from "../components/EventListlings";

import { GlobalProvider } from "../context/GlobalState";

function Glitch() {
  return (
    <GlobalProvider>
      <div>
        <h3>glitch</h3>
        <EventListlings />
        <AddEvent />
        <img src={glitch} alt="glitch" />
      </div>
    </GlobalProvider>
  );
}

export default Glitch;
