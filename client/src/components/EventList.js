import React, { Component } from "react";
import axios from "axios";
import EventCreate from "./EventCreate";

class EventList extends Component {
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
          events: events.data,
          array: events.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.checkForUpdates();
  }
  render() {
    var events = this.state.events;
    return (
      <div>
        <EventCreate checkForUpdates={this.checkForUpdates} />
        <p>Events:</p>
        <ul>
          {events.map(({ id, name, data }) => (
            <li key={id.toString()}>
              {name} {data}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EventList;
