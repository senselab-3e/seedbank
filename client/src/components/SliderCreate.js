import React, { Component } from "react";
import axios from "axios";
import { UserId } from "./GetUser";

export class SliderCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: UserId(), ///this.props.userId didn't work
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    //weirdly, the state for userId is staying at null. this is nnot a long term fix but for now
    this.setState({ userId: UserId() });
    e.preventDefault();
    axios
      .post("/api/sliderTexts", {
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
        //console.log("Created event: " + sliderText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Add a Slider Text
          <br />
          <br />
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

export default SliderCreate;
