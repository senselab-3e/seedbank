import React, { Component } from "react";
import axios from "axios";

export class DataRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      loading: false,
      pathway: this.props.pathway,
      dataUpdate: this.props.dataUpdate,
    };
  }

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

  //this is firing every time the mouse click event happened too..
  componentDidUpdate() {
    // if (this.props.dataUpdate === true)
    //this.setState({ dataUpdate: this.props.dataUpdate });
    //this isn't ideal because it's running continuously....
    console.log(
      "something updated",
      this.state.dataUpdate,
      this.props.dataUpdate
    );

    this.props.setDataUpdate(false);

    //add the memory leak stuff you had from glitch component
    //so the state is not updating with the new value of props passed to it. but if I call setState react gets mad

    // if (this.state.dataUpdate === true) {
    //   this.apiGetList(this.state.pathway);
    //   this.props.dataRetrieve(this.state.list);
    //   this.props.setDataUpdate(false);
    //   this.setState({ dataUpdate: false });
    // }
    //this condition check isn't working how i think it is.
    // if (this.state.loading === false) {
    //   console.log("datarequest happening");
    //   this.apiGetList(this.state.pathway);
    //   this.props.dataRetrieve(this.state.list);
    // } else if (this.state.dataUpdate === true) {
    //   this.apiGetList(this.state.pathway);
    //   this.props.dataRetrieve(this.state.list);
    // }
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
