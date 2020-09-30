import React, { Component } from "react";
import axios from "axios";

export class SliderCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: this.props.userId,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    //console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    //weirdly, the state for userId is staying at null. this is nnot a long term fix but for now
    this.setState({ userId: this.props.userId });
    console.log(this.state.userId, this.props.userId, "hello");
    e.preventDefault();
    axios
      .post("/api/sliderTexts", {
        title: this.state.title,
        body: this.state.body,
        user_id: this.props.userId,
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
    console.log(this.props.userId);
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
