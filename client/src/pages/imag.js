import { Link } from "react-router-dom";
import EventCreate from "../components/EventCreate";
import EventList from "../components/EventList";
import axios from "axios";
import ImageShow from "../components/ImageShow";

import React, { Component } from "react";

export class Imag extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  // checkForUpdates = () => {
  //   axios
  //     .get("/api/assets/images/190")
  //     .then(events => {
  //       this.setState({
  //         events: events.path
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };
  //
  // componentDidMount() {
  //   this.checkForUpdates();
  // }

  render() {
    return (
      <div>
        <ImageShow/>
        <br />
        <br />
        <Link to="/">Back to entryway</Link>
      </div>
    );
  }
}

export default Imag;
