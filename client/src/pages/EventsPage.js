import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventList from "../components/EventList";
export class EventsPage extends Component {
  componentDidMount() {
    this.props.updateLocation(window.location);
  }
  render() {
    return (
      <div>
        <EventList />
        <br /> <br />
        <Link to="/"> Back to entryway </Link>
      </div>
    );
  }
}

export default EventsPage;
