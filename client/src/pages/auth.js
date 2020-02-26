import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthLogin from "../components/AuthLogin";
import AuthSignup from "../components/AuthSignup";
import AuthLogout from "../components/AuthLogout";
import axios from "axios";

export class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathway: "/",
      message: "",
      auth: false
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth = status => {
    console.log("triggered", status);
    this.setState({
      auth: status
    });
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ pathway: this.props.location.state.route });
      this.setState({ message: this.props.location.state.message });
    } else {
      console.log("nothing");
    }

    const headers = {
      authorization: "Bearer " + localStorage.getItem("token")
    };

    axios
      .get("/api/auth/verify", { headers: headers })
      .then(res => {
        if (res.status === 200) {
          this.setState({ auth: true });
        } else {
          this.setState({ auth: false });
        }
      })
      .catch(err => {
        this.setState({ auth: false });
      });
  }

  render() {
    const { auth, pathway } = this.state;
    if (auth) {
      return (
        <React.Fragment>
          <h3>You are Already Logged In</h3>
          <AuthLogout />
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <h3>{this.state.message}</h3>
          <AuthLogin
            pathway={pathway}
            updateAuth={this.updateAuth}
            auth={this.auth}
          />
          <br />
          <br />
          <AuthSignup
            pathway={pathway}
            updateAuth={this.updateAuth}
            auth={this.auth}
          />
          <br />
          <br />
          <Link to="/">Back to entryway</Link>
          <br />
          <br />
        </div>
      );
    }
  }
}

export default AuthPage;
