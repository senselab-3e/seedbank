import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../style/glitch.css";
import glitch from "../assets/img/404_glitch2.gif";
import { Event } from "../components/Event";
import AddEvent from "../components/AddEvent";

export default function Glitch() {
  const { events, fetchEvents } = useContext(GlobalContext);

  //useEffect is a hook, for function components, that works like component did mount. so it fetches the db values at component initialization
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
