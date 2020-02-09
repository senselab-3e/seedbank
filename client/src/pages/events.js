import React from "react";
import { Link } from "react-router-dom";

import EventList from "../components/EventList";

const EventsPage = () => {
  return (
    <div>
      <EventList />
      <br /> <br />
      <Link to="/"> Back to entryway </Link>{" "}
    </div>
  );
};

export default EventsPage;
