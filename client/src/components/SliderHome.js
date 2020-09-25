import React, { Component } from "react";

export class SliderHome extends Component {
  constructor() {
    super();
    this.state = {
      texts: [],
    };
  }
  componentDidMount() {
    // axios.get('/api/sliderTexts')
    // 	 .then(texts => {
    // 	 	this.setState({texts: texts.data})
    // 	 })
    // 	 .catch(err => console.log(err))
  }
  render() {
    var texts = this.state.texts;
    return (
      <div>
        <p> Slider Texts:</p>
        <ul>
          {/* { texts.map(({ body, title }) => (
                						<li key={id.toString()}>{body} {title}</li>
                					))} */}
        </ul>
      </div>
    );
  }
}

export default SliderHome;
