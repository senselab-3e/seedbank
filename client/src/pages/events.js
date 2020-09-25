import React from "react";
import { Link } from "react-router-dom";
import EventCreate from "../components/EventCreate";
import EventList from "../components/EventList";

const EventsPage = () => {
  const updateEventList = () => {
    console.log("new event added");
  };

  return (
    <div>
      <EventCreate newEvent={updateEventList} />
      <EventList />
      <br />
      <br />
      <Link to="/">Back to entryway</Link>
    </div>
  );
};

export default EventsPage;
