import ConvoTraceList from "../components/ConvoTraceList";
import axios from "axios";

import React, { Component } from "react";

const image_host = 'https://3ecologies-seedbank.com/assets/images/';

export class ConvoTracesPage extends Component {
  constructor() {
    super();
    this.state = {
      traces: []
    };
  }

checkForUpdates = async () => {
    const texts = await axios.get("/api/texts?source=slack").catch(err => console.log(err));
    const traces = texts.data.map(t => {
      if (t.images != '') {
        var image = JSON.parse(t.images)[0];
        t.img = image_host + image.path + '/' + image.name;
      }
      return t;
    });

    this.setState({ traces: traces });
  };

  componentDidMount() {
    this.checkForUpdates();
  }

  render() {
    return (
      <div>
        <ConvoTraceList traces={this.state.traces} />
      </div>
    );
  }
}

export default ConvoTracesPage;
