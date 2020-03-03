import React, { useContext, useEffect } from "react";
import { Event } from "./Event";

import { GlobalContext } from "../context/GlobalState";

export const EventListlings = () => {
  const { events, fetchEvents, themeName, toggleTheme } = useContext(
    GlobalContext
  );
  console.log(themeName);
  //useEffect is a hook, for function components, that works like component did mount. so it fetches the db values at component initialization
  //in any kind of asynchronous component you want to use useEffect
  ////the empty array below keeps it from going through an infinite loop

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <button onClick={toggleTheme}>Change Theme!</button> {themeName}
      <ul className="list">
        {events.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </ul>
    </React.Fragment>
  );
};
