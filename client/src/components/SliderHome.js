import React, { Component } from "react";
import SliderCreate from "../components/SliderCreate";
import axios from "axios";
import DeleteBt from "../components/DeleteBt";
export class SliderHome extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       events: [],
  //     };
  //   }
  //   componentDidMount() {
  //     axios
  //       .get("/api/events")
  //       .then((events) => {
  //         this.setState({ events: events.data });
  //       })
  //       .catch((err) => console.log(err));
  //   }
  //   render() {
  //     var events = this.state.events;
  //     return (
  //       <div>
  //         <p>Events:</p>
  //         <ul>
  //           {events.map(({ id, name, data }) => (
  //             <li key={id.toString()}>
  //               {name} {data}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     );
  //   }
  constructor() {
    super();
    this.state = {
      texts: [],
    };
  }

  updateList() {
    axios
      .get("/api/sliderTexts")
      .then((sliderTexts) => {
        console.log("coming soon");
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
