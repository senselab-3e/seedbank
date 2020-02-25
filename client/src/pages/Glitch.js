import React from "react";
// import { GlobalContext } from "../context/GlobalState";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import AddEvent from "../components/AddEvent";
import { EventListlings } from "../components/EventListlings";

function Glitch() {
  return (
    <>
      <div className="glitch">
        <h3>glitch</h3>
        <EventListlings />
        <img src={glitch} alt="glitch" />
      </div>
      <AddEvent />
    </>
  );
}

export default Glitch;
