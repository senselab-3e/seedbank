import React, { Component } from "react";
import axios from "axios";

class ImageCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "", tendencies: "", notes: "", urlUploadImg: "" };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    switch (e.target.name) {
      case "image":
        this.setState({ image: e.target.files[0] });
        const uplImg = window.URL.createObjectURL(e.target.files[0]);
        this.setState({ urlUploadImg: uplImg });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  async submit(e) {
    e.preventDefault();

    let formData = new FormData();
    // eslint-disable-next-line
    await Object.keys(this.state).map((key) => {
      formData.append(key, this.state[key]);
    });
    axios
      .post("/api/assets/images", formData, {
        "content-type": "multipart/form-data",
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="container">
          <img className="image" src={this.state.urlUploadImg} alt="" />
        </div>
        <form encType="multipart/form-data">
          <label>
            <input type="file" name="image" onChange={this.onChange} />
            <input
              type="text"
              name="tendencies"
              placeholder="enter some tendencies (comma-separated)"
              value={this.state.value}
              onChange={this.onChange}
            />
            enter any notes
            <input
              type="text"
              name="notes"
              placeholder=""
              value={this.state.value}
              onChange={this.onChange}
            />
            <input type="button" value="Upload" onClick={this.submit} />
          </label>
        </form>
      </>
    );
  }
}

export default ImageCreate;
