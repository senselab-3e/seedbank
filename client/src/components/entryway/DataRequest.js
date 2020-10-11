import React, { Component } from "react";
import axios from "axios";

export class DataRequest extends Component {
  state = {
    list: {},
    loading: true,
    pathway: this.props.pathway,
  };

  apiGetList = (pathway) => {
    axios
      .get(`/api/${pathway}`)
      .then((list) => {
        this.setState({ list: list.data });
        this.setState({ loading: false });
        this.props.dataRetrieve(this.state.list);
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.apiGetList(this.state.pathway);
  }
  render() {
    return <div></div>;
  }
}

export default DataRequest;
