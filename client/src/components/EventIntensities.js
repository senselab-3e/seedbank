import React, { Component } from "react";
import axios from "axios";
import EventCreate from "./EventCreate";
import RandomLinkPlace from "./RandomLinkPlace";
import ChooseElement from "./ChooseElement";

export class EventIntensities extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      staticData: [],
      randomArray: [],
      isLogged: false
    };
  }

  componentDidMount() {
    this.props.updateLocation(window.location);

    const staticData = [
      {
        id: 19,
        created_at: "2020-01-29T02:24:53.000Z",
        updated_at: "2020-01-29T02:24:53.000Z",
        name: "Means of Relation",
        data: null,
        location: "Cluj",
        event_type: "Minor Movement",
        event_start: "2019-09-09T04:00:00.000Z",
        event_end: "2019-09-11T04:00:00.000Z"
      },
      {
        id: 18,
        created_at: "2020-01-29T02:24:53.000Z",
        updated_at: "2020-01-29T02:24:53.000Z",
        name: "Instituent Noise and the Sensibility Soup for Collective Care",
        data: null,
        location: "Zurich",
        event_type: "Minor Movement",
        event_end: "2019-07-08T04:00:00.000Z"
      },
      {
        id: 17,
        created_at: "2020-01-29T02:24:53.000Z",
        updated_at: "2020-01-29T02:24:53.000Z",
        name: "Oz",
        data: null,
        location: "Oz",
        event_type: "Minor Movement",
        event_start: "2019-11-11T05:00:00.000Z",
        event_end: "2019-12-22T05:00:00.000Z"
      }
    ];
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

  updateArray = array => {
    if (!this.state.isLogged) {
      this.setState({
        randomArray: array,
        isLogged: true
      });
      console.log(array, "captured");
    }
  };

  render() {
    return (
      <div>
        <EventCreate />
        <RandomLinkPlace classname={"database"} array={this.state.array} />
        <ChooseElement
          array={this.state.array}
          updateArray={this.updateArray}
        />
      </div>
    );
  }
}

export default EventIntensities;
