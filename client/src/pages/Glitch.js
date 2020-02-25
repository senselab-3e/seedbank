import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import { Event } from "../components/Event";
import AddEvent from "../components/AddEvent";
// import FetchEvents from "../components/FetchEvents";

export default function Glitch() {
  const { events } = useContext(GlobalContext);
  console.log(events);
  return (
    <>
      <div className="glitch">
        <h3>glitch</h3>
        <ul className="list">
          {events.map(event => (
            <Event key={event.id} event={event} />
          ))}
        </ul>
        <img src={glitch} alt="glitch" />
      </div>
      <AddEvent />
    </>
  );
}
