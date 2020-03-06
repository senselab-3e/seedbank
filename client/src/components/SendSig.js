import React, { Component } from "react";

export class SendSig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      path: "",
      logged: false
    };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.submit = this.submit.bind(this);
    console.log(this.props, "send Sig");
  }
  handleChange(props) {
    console.log(props, "handlechange");
    if (props.data !== undefined) {
      this.setState({
        color: props.data.color,
        path: props.data.path,
        logged: true
      });
    } else {
      console.log("nothing to log");
    }
    console.log(this.state.path);
  }

  //   submit(e) {
  //     console.log("sig being sent", e);
  //     // e.preventDefault();
  //     // axios
  //     //   .post("/api/signatures", {
  //     //    color: this.state.color,
  //     //     path: this.state.path
  //     //   })
  //     //   .then(event => {
  //     //     console.log("Added signature: " + event);
  //     //   })
  //     //   .catch(err => {
  //     //     console.log(err);
  //     //   });
  //     // //this.props.checkForUpdates(); // this was for updating the list view of events - not applicable in this case
  //   }

  render() {
    //console.log(this.props, "send Sig");
    return <div></div>;
  }
}

export default SendSig;
