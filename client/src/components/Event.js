import React from "react";
//import { GlobalContext } from "../context/GlobalState";

export const Event = ({ event }) => {
  //   const { deleteEvent } = useContext(GlobalContext);
  //const altBars = event.id % 2 === 0 ? "even" : "odd";
  //below i use Math.abs to make any number a positive number so we don't get a double printing of a -$-400 etc etc // and allow the sign variable alone to return the neg/positiv indicator
  return (
    <li className={""}>
      {event.name}
      <span>{event.location}</span>
      <span>{event.event_type}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

// stashin this until a route for deleting events is created<button onClick={() => deleteEvent(event.id)} className="delete-btn">
// x
// </button>