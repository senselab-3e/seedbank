import React from "react";
import { Link } from "react-router-dom";
import EventCreate from "../components/EventCreate";
import EventList from "../components/EventList";
import jwt_decode from "jwt-decode";

const EventsPage = () => {
  const headers = {
    authorization: "Bearer " + localStorage.getItem("token"),
  };

  const token = headers.authorization.split(" ")[1];
  console.log(jwt_decode(token), "token decoder, in theory");
  return (
    <div>
      <EventCreate />
      <EventList />
      <br />
      <br />
      <Link to="/">Back to entryway</Link>
    </div>
  );
};

export default EventsPage;
