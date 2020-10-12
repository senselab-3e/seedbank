import React, { Component } from "react";
import axios from "axios";

export class DataRequest extends Component {
  state = {
    list: {},
    loading: false,
    pathway: this.props.pathway,
  };

  apiGetList = (pathway) => {
    axios
      .get(`/api/${pathway}`)
      .then((list) => {
        this.setState({ list: list.data });
        this.props.dataRetrieve(this.state.list);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.apiGetList(this.state.pathway);
    this.setState({ loading: true });
  }

  componentDidUpdate() {
    if (this.state.loading) {
    } else {
      this.apiGetList(this.state.pathway);
    }
  }
  //this is to address a memory leak issue
  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    return <div></div>;
  }
}

export default DataRequest;
