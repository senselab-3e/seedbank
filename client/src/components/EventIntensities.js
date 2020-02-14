import React, { Component } from "react";
import axios from "axios";
import EventCreate from "./EventCreate";
import RandomLinkPlace from "./RandomLinkPlace";
import ChooseElement from "./ChooseElement";

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
    event_type: "Major Movement",
    event_end: "2019-07-08T04:00:00.000Z"
  },
  {
    id: 17,
    created_at: "2020-01-29T02:24:53.000Z",
    updated_at: "2020-01-29T02:24:53.000Z",
    name: "Oz",
    data: null,
    location: "Oz",
    event_type: "Sponge",
    event_start: "2019-11-11T05:00:00.000Z",
    event_end: "2019-12-22T05:00:00.000Z"
  },
  {
    id: 16,
    created_at: "2020-01-29T02:24:53.000Z",
    updated_at: "2020-01-29T02:24:53.000Z",
    name: "Minor Gestures",
    data: null,
    location: "Montreal",
    event_type: "Minor Movement",
    event_start: "2019-08-15T04:00:00.000Z",
    event_end: "2019-08-16T04:00:00.000Z"
  }
];

export class EventIntensities extends Component {
  constructor() {
    super();
    this.state = {
      events: null,
      staticData: [],
      randomArray: [],
      isLogged: false,
      locObj: null,
      locObjisLogged: false
    };
  }

  updateArray = array => {
    if (!this.state.isLogged) {
      this.setState({
        randomArray: array,
        isLogged: true
      });
      //console.log(array, "captured");
    }
  };

  //this is up here because i couldn't put it in compoentDidMount because the this.state.events value was returning empty at that level. i had to call it within the render
  eventListFilter = (obj, valueKey) => {
    if (obj) {
      let selectObj = {};
      for (const key in obj) {
        if (selectObj.hasOwnProperty(obj[key][valueKey])) {
          selectObj[obj[key].event_type] += 1;
        } else {
          if (obj[key][valueKey] !== null) {
            selectObj[obj[key][valueKey]] = [];
            selectObj[obj[key][valueKey]] = 1;
          }
        }
      }
      if (!this.state.locObjisLogged) {
        this.setState({
          locObj: selectObj,
          locObjisLogged: true
        });
        console.log(this.state.locObj);
      }
    }
  };

  checkForUpdates = () => {
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
  };

  componentDidMount() {
    this.props.updateLocation(window.location);
    this.checkForUpdates();
    // axios
    //   .get("/api/events")
    //   .then(events => {
    //     this.setState({
    //       events: events.data,
    //       array: events.data,
    //       staticData: staticData
    //     });
    //   })
    //   .catch(err => console.log(err));

    //console.log(this.state.events); // this is weirdly empty at this stage, even though axios set just above...
    // eventListFilter(staticData);
    //   if (this.state.locObj !== null) {
    //   this.props.updateMinorLocations(this.state.locObj);
    // }
    // );
  }

  render() {
    console.log(this.state.events);
    //console.log(this.eventListFilter(this.state.events, "location"));
    //console.log(this.state.events);

    //this is throwing undefined this.eventListFilter(this.state.events, "location")
    // this.props.updateLocation(
    if (this.state.events !== null) {
      this.eventListFilter(this.state.events, "location");
    }
    console.log(this.state.locObj);

    // if (this.state.events !== null) {
    //   this.props.updateMinorLocations(this.state.events);
    // }

    // );
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
