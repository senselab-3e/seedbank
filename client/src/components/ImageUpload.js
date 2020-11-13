import React, { Component } from "react";
import axios from "axios";
// import P5Wrapper from "react-p5-wrapper";
// import sketch1 from "./p5/sketch1";
import P5Canvas from "./P5Canvas";
import ImageFormSubmit from "./ImageFormSubmit";
import DownloadBt from "./DownloadBt";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      tendencies: "",
      notes: "",
      urlUploadImg: null,
      saveImage: false,
      enabledClass: "disabled",
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.saveStatus = this.saveStatus.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  onChange(e) {
    switch (e.target.name) {
      case "image":
        this.setState({
          image: e.target.files[0],
        });
        const uplImg = window.URL.createObjectURL(e.target.files[0]);
        this.setState({
          urlUploadImg: uplImg,
        });
        this.setState({ enabledClass: "" });
        break;
      default:
        this.setState({
          [e.target.name]: e.target.value,
        });
    }
  }

  saveStatus() {
    this.setState({ saveImage: false });
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

  setImage() {
    this.setState({ saveImage: true });
  }

  render() {
    return (
      <>
        <div className="element">
          <div style={{ margin: 0, padding: 0 }}>
            <form encType="multipart/form-data">
              <label>
                <input type="file" name="image" onChange={this.onChange} />
              </label>
            </form>
            <DownloadBt
              setElement={this.setImage}
              enabledClass={this.state.enabledClass}
            />
          </div>

          <form encType="multipart/form-data">
            {/* {inputVals} */}
            <ImageFormSubmit
              onChange={this.onChange}
              value={this.state.value}
              submit={this.submit}
              enabledClass={this.state.enabledClass}
            />
          </form>
        </div>
        <div className="element-center">
          <div id="canvas" className="canvas-container">
            <P5Canvas
              urlUploadImg={this.state.urlUploadImg}
              saveImage={this.state.saveImage}
              saveStatus={this.saveStatus}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ImageUpload;

//unfinished business. the webgl in the p5 canvas is triggering a
//p5.js:82848 [Violation] Added non-passive event listener to a scroll-blocking 'wheel' event. Consider marking event handler as 'passive' to make the page more responsive.
//i really don't know where to begin with fixing this, because the even listeners aren't in the js or react... its all running in p5.  below is a bit of a schematic of how to solve this problem normally, but they dont work because i dont know what i'm targeting for the evenlistener.
//componentDidMount() {
// this.input.addEventListener("keypress", this.onKeyPress, {
//   passive: false,
// });
// document.addEventListener(
//   document,
//   "touchstart",
//   function (e) {
//     console.log(e.defaultPrevented); // will be false
//     e.preventDefault(); // does nothing since the listener is passive
//     console.log(e.defaultPrevented); // still false
//   },
//   Modernizr.passiveeventlisteners ? { passive: true } : false
// );
//}

//componentWillUnmount() {
//this.input.removeEventListener("keypress", this.onKeyPress);
//}
