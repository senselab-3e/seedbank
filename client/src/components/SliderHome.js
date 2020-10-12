import React, { Component } from "react";
import SliderCreate from "../components/SliderCreate";
import axios from "axios";
import DeleteBt from "../components/DeleteBt";
import { UserId, UserName } from "./GetUser";
import SliderbyId from "../components/SliderbyId";
import ColorPicker from "../components/ColorPicker";
export class SliderHome extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      texts: [],
      userId: null,
      userName: null, // i may not end up using this, as the id will never be duplicated by the username could be - buttt maybe i want to personalize the text view of a page for a user so keeping this here for now
    };
    this.apiListUpdate = this.apiListUpdate.bind(this);
  }

  apiListUpdate() {
    axios
      .get("/api/sliderTexts")
      .then((sliderTexts) => {
        // console.log(
        //   "coming soon this will be where a prop fuction is called to re-initialis the axio request for the lates slidertext el view"
        // );
        this.setState({ texts: sliderTexts.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.setState({ userId: UserId() });
    this.setState({ userName: UserName() });
    this.apiListUpdate();
    this.setState({ loading: true });
  }
  //this is to address a memory leak issue
  componentDidUpdate() {
    if (this.state.loading) {
    } else {
      this.apiListUpdate();
    }
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }
  render() {
    var texts = this.state.texts;
    return (
      <div>
        <ColorPicker />
        <SliderbyId />
        <SliderCreate
          userId={this.state.userId}
          apiListUpdate={this.apiListUpdate}
        />
        <p> Slider Textsddd:</p>
        <ul>
          {texts.map(({ body, title, id }) => (
            <li key={id.toString()}>
              {body} {title}
              <DeleteBt
                id={id}
                path={"sliderTexts"}
                apiListUpdate={this.apiListUpdate}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SliderHome;
