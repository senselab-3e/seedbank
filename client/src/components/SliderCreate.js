import React, { Component } from "react";
import axios from "axios";

export class SliderCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    //console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    axios
      .post("/api/sliderTexts", {
        title: this.state.title,
        body: this.state.body,
      })
      .then((sliderText) => {
        console.log("Created event: " + sliderText);
      })
      .catch((err) => {
        console.log(err);
      });
    //this.props.apiRequest();
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
