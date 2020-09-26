import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import EventCreate from "../components/EventCreate";
import EventList from "../components/EventList";

//   return (
//     <div>
//       <EventCreate newEvent={getEventList} />
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

  getEventList = () => {
    console.log("new event added");
    axios
      .get("/api/events")
      .then((events) => {
        this.setState({ events: events.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getEventList();
  }

  render() {
    return (
      <div>
        <EventCreate updateList={this.getEventList} />
        <EventList events={this.state.events} />
        <br />
        <br />
        <Link to="/">Back to entryway</Link>
      </div>
    );
  }
}

export default events;
