import { Link } from "react-router-dom";
// import EventCreate from "../components/EventCreate";
import ImageList from "../components/Imagez";
import axios from "axios";

import React, { Component } from "react";

export class Imag extends Component {
  constructor() {
    super();
    this.state = {
      image: ''
    };
  }

  checkForUpdates = () => {
    axios
      .get('/api/assets/images/190')
      .then(image => {
        this.setState({
          image: image.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.checkForUpdates();
  }
  render() {
    console.log(this.state.image);

    return (
      <div>
      olA:
      {this.state.image}
        <br />
        <br />
        <Link to="/">Back to entryway</Link>
      </div>
    );
  }
}

export default Imag;
