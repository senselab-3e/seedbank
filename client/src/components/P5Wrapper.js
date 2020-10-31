import React from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch1 from "./p5/sketch1";
//just here to double check my image pathway is good
//import photo from "../assets/images/0d/0b/c6/2a/photo_2020-03-05_15-14-32.jpg";

class P5wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "", tendencies: "", notes: "", urlUploadImg: null };
    this.onChange = this.onChange.bind(this);
    //this.submit = this.submit.bind(this);
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

  render() {
    return (
      <div className="main">
        <form encType="multipart/form-data">
          <label>
            <input type="file" name="image" onChange={this.onChange} />
            {/* <input
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
            /> */}
            {/* <input type="button" value="Upload" onClick={this.submit} /> */}
          </label>
        </form>
        dafds
        {/* <img src={photo} alt="test photo" /> */}
        {/* <img className="image" src={this.state.urlUploadImg} alt="" /> */}
        <P5Wrapper sketch={sketch1} imgSource={this.state.urlUploadImg} />
      </div>
    );
  }
}

export default P5wrapper;
