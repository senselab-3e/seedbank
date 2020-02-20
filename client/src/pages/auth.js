import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthLogin from "../components/AuthLogin";
import AuthSignup from "../components/AuthSignup";
import AuthLogout from "../components/AuthLogout";

export class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathway: "/"
    };
  }
  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ pathway: this.props.location.state.route });
    } else {
      console.log("nothing");
    }
  }

  render() {
    return (
      <div>
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
