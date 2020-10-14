import React, { Component } from "react";
import axios from "axios";
import { UserId } from "../GetUser";
// import styled from "styled-components";

export class DataCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      list: {},
      pathway: this.props.pathway,
      userId: UserId(), ///this.props.userId didn't work
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

  submit(e) {
    //weirdly, the state for userId is staying at null. this is nnot a long term fix but for now
    this.setState({
      userId: UserId(),
    });
    e.preventDefault();
    axios
      .post(`/api/${this.state.pathway}`, {
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userId,
      })
      .then((sliderText) => {
        this.props.apiListUpdate
          ? this.props.apiListUpdate()
          : console.log(
              "missing callback function for updating list of db items"
            );
        //REVIEW HERE ///NOT WORKING AS INTENDEd
        this.props.setDataUpdate
          ? this.props.setDataUpdate(true)
          : console.log("no updateapi test");
        //console.log("Created event: " + sliderText);

        this.apiGetList(this.state.pathway);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form className="slideTextForm" onSubmit={this.submit}>
        <label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            placeholder="body"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Create" />
      </form>
    );
  }
}

export default DataCreate;
