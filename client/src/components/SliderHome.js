import React, { Component } from "react";
import SliderCreate from "../components/SliderCreate";
import axios from "axios";
import DeleteBt from "../components/DeleteBt";
import { UserId, UserName } from "./GetUser";
export class SliderHome extends Component {
  constructor() {
    super();
    this.state = {
      texts: [],
      userId: null,
      userName: null,
    };
  }

  updateList() {
    axios
      .get("/api/sliderTexts")
      .then(() => {
        console.log(
          "coming soon this will be where a prop fuction is called to re-initialis the axio request for the lates slidertext el view"
        );
        // this.setState({ texts: sliderTexts.data });
      })
      .catch((err) => console.log(err));
  }
  //   apiRequest() {
  //     axios
  //       .get("/api/sliderTexts")
  //       .then((sliderTexts) => {
  //         this.setState({ texts: sliderTexts.data });
  //       })
  //       .catch((err) => console.log(err));
  //   }
  componentDidMount() {
    //this.apiRequest();
    this.setState({ userId: UserId() });
    this.setState({ userName: UserName() });

    axios
      .get("/api/sliderTexts")
      .then((sliderTexts) => {
        this.setState({ texts: sliderTexts.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    var texts = this.state.texts;
    console.log(texts);
    return (
      <div>
        <SliderCreate />
        <p> Slider Textsddd:</p>
        <ul>
          {texts.map(({ body, title, id }) => (
            <li key={id.toString()}>
              {body} {title}
              <DeleteBt
                id={id}
                path={"sliderTexts"}
                updateList={this.updateList}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SliderHome;
