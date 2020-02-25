import React from "react";
// import { GlobalContext } from "../context/GlobalState";

export const Event = ({ event }) => {
  //   const { deleteEvemt } = useContext(GlobalContext);
  //const altBars = event.id % 2 === 0 ? "even" : "odd";
  //below i use Math.abs to make any number a positive number so we don't get a double printing of a -$-400 etc etc // and allow the sign variable alone to return the neg/positiv indicator
  return (
    <li className={""}>
      {event.name}
      <span>{event.event_type}</span>
      <button
        // onClick={() => deleteEvent(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
