import ConvoTraceList from "../components/ConvoTraceList";
import axios from "axios";

import React, { Component } from "react";

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
      t.img = JSON.parse(t.images)[0].external_url;
      return t;
    });
    // const traces = await Promise.all(texts.data.map( async (t) => {
    //   t.img = await axios.get("/api/assets/images?id=" + JSON.parse(t.images)[0].id).catch(err => console.log(err));
    //   return t;
    // }));

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
