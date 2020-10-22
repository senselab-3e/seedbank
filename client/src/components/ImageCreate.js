import React, { Component } from "react";
import axios from "axios";

class ImageCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "", tendencies: "", notes: "", urlObj: "" };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    switch (e.target.name) {
      case "image":
        this.setState({ image: e.target.files[0] });
        const uplImg = window.URL.createObjectURL(e.target.files[0]);
        this.setState({ urlObj: uplImg });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  async submit(e) {
    e.preventDefault();

    let formData = new FormData();
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
        <img className="imgUploadPreview" src={this.state.urlObj} alt="" />
        <form encType="multipart/form-data">
          <label>
            Upload an image
            <br />
            <br />
            <input
              type="text"
              name="tendencies"
              placeholder="tendencies (comma-separated)"
              value={this.state.value}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="notes"
              placeholder="notes"
              value={this.state.value}
              onChange={this.onChange}
            />
            <br />
            <br />
            <input type="file" name="image" onChange={this.onChange} />
            <br />
            <br />
            <input type="button" value="Upload" onClick={this.submit} />
          </label>
        </form>
      </>
    );
  }
}

export default ImageCreate;
