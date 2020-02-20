import React, { Component } from "react";
//import axios from "axios";

class EventList extends Component {
  render() {
    return (
      <div>
        <p> Events: </p>
        <ul>
          {this.props.events.map(({ id, name, data }) => (
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
