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
    //console.log(this.props.sigData, "receiving Sig");
    console.log(this.state.path);
  }
  handleChange(props) {
    console.log(props, "handlechange");
    if (props !== undefined) {
      //it's an object so you can't do a simple slice
      // console.log(props.data.path, "afterslice");
      // props.data.path = props.data.path.splice(0, 75);
      // console.log(props.data.path, "checkslice");
      this.setState({
        color: props.color,
        path: props.path,
        logged: true
      });
    } else {
      console.log("nothing to log");
    }
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
    return <div></div>;
  }
}

export default SendSig;
