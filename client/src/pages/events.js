import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import EventCreate from "../components/EventCreate";
import EventList from "../components/EventList";

//   return (
//     <div>
//       <EventCreate newEvent={updateEventList} />
//       <EventList />
//       <br />
//       <br />
//       <Link to="/">Back to entryway</Link>
//     </div>
//   );
// };

// export default EventsPage;

export class events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  updateEventList = () => {
    console.log("new event added");
    axios
      .get("/api/events")
      .then((events) => {
        this.setState({ events: events.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.updateEventList();
  }

  render() {
    return (
      <div>
        <EventCreate newEvent={this.updateEventList} />
        <EventList events={this.state.events} />
        <br />
        <br />
        <Link to="/">Back to entryway</Link>
      </div>
    );
  }
}

export default events;
