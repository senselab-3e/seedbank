import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthLogin from "../components/AuthLogin";
import AuthSignup from "../components/AuthSignup";
import AuthLogout from "../components/AuthLogout";

export class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathway: "/",
      message: ""
    };
  }
  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ pathway: this.props.location.state.route });
      this.setState({ message: this.props.location.state.message });
    } else {
      console.log("nothing");
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <AuthLogin pathway={this.state.pathway} />
        <br />
        <br />
        <AuthSignup pathway={this.state.pathway} />
        <br />
        <br />
        <Link to="/">Back to entryway</Link>
        <br />
        <br />
        <AuthLogout />
      </div>
    );
  }
}

export default AuthPage;
