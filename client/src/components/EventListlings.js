import React, { useContext, useEffect } from "react";
import { Event } from "./Event";

import { GlobalContext } from "../context/GlobalState";

export const EventListlings = () => {
  const { events, fetchEvents } = useContext(GlobalContext);

  //useEffect is a hook, for function components, that works like component did mount. so it fetches the db values at component initialization
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className="list">
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
};
