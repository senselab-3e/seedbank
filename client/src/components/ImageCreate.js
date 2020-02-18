import React, { Component } from "react";
import axios from "axios";

class ImageCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      tendencies: "",
      notes: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    console.log(e.target.name, "apples");
    switch (e.target.name) {
      case "image":
        console.log(e.target);
        this.setState({
          image: e.target.files[0]
        });
        break;
      default:
        this.setState({
          [e.target.name]: e.target.value
        });
    }
  }

  async submit(e) {
    e.preventDefault(); // <-- not sure if this should be there or not; actually, this might be the problem, but I don't fully understand it yet
    //this prevents the default action associated with the event, which is usually click and go to an anchor tag -- it is needed to prevent a side-effect from occuring and probably not our bug // submit forms in react (as far as i've seen) always have this because you are posting data.
    let formData = new FormData();
    // console.log(this.state.image); <-- this works // confirmed -- seen in react chrome debugger component monitor
    await formData.append("image", this.state.image);
    // note that FormData can't be logged; this is normal

    axios.post("/api/assets/image", formData).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <form encType="multipart/form-data" onSubmit={this.submit}>
        <label>
          Upload an image <br /> <br />
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
        </label>
        <div className="custom-file">
          <br />
          <input type="file" name="image" onChange={this.onChange} />
        </div>
        <br />
        <input type="submit" value="Upload" />
      </form>
    );
  }
}

export default ImageCreate;
