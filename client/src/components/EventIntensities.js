import React, { Component } from "react";
import axios from "axios";
import EventCreate from "./EventCreate";

export class EventIntensities extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      staticData: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/events")
      .then(events => {
        this.setState({
          events: events.data,
          array: events.data,
          staticData: staticData
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <EventCreate />
        <RandomLinkPlace
          classname={"database"}
          array={this.state.array}
          staticData={this.state.staticData}
        />
      </div>
    );
  }
}

export default EventIntensities;
