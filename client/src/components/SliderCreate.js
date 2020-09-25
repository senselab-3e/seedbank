import React, { Component } from "react";
import axios from "axios";

export class SliderCreate extends Component {
  constructor(props) {
    super(props);
    // this.state = {eventname: '', sponges: ''};
    this.state = { title: "", body: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    axios
      .post("/api/sliderTexts", {
        // name: this.state.eventname,
        // sponges: this.state.sponges
        title: this.state.title,
        body: this.state.body,
      })
      .then((sliderText) => {
        console.log("Created event: " + sliderText);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Create an event
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
