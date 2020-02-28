import React from "react";
// import { GlobalContext } from "../context/GlobalState";
import "../style/glitch.css";
import glitch from "../404_glitch2.gif";
import { AddEvent } from "../components/AddEvent";
import { EventListlings } from "../components/EventListlings";

function Glitch() {
  return (
    <div>
      <h3>glitch</h3>
      <EventListlings />
      <AddEvent />
      <img src={glitch} alt="glitch" />
    </div>
  );
}

export default Glitch;
