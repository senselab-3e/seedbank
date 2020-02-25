import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// import { v4 as uuidv4 } from "uuid";

export default function AddEvent() {
  const [name, setName] = useState("");
  const [sponge, setSponge] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [event_type, setEvent_type] = useState("");

  const { addEvent } = useContext(GlobalContext);
  //function prop from gloablstate component

  const onSubmit = e => {
    e.preventDefault();
    //refactor later to use uuid to generate id:
    const newEvent = {
      //id: Math.floor(Math.random() * 100000000),
      name,
      sponge
      //   location,
      //   event_type
    };
    //callback funtion to global state and reducer that will post
    addEvent(newEvent);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="event_type">Event Type</label>
          <input
            type="text"
            value={sponge}
            onChange={e => setSponge(e.target.value)}
            placeholder="Enter event type..."
          />
          <button className="btn">Add Event</button>
        </div>
      </form>
    </div>
  );
}

{
  /* <div className="form-control">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Enter Location..."
          />
        </div> */
}
