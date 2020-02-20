import { Link } from "react-router-dom";
import EventCreate from "../components/EventCreate";
import EventList from "../components/EventList";
import axios from "axios";

import React, { Component } from "react";

export class EventsPage extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  checkForUpdates = () => {
    axios
      .get("/api/events")
      .then(events => {
        this.setState({
          events: events.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.checkForUpdates();
  }

  render() {
    return (
      <div>
        <EventCreate checkForUpdates={this.checkForUpdates} />
        <EventList events={this.state.events} />
        <br />
        <br />
        <Link to="/">Back to entryway</Link>
      </div>
    );
  }
}

export default EventsPage;
