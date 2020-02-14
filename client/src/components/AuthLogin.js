import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import withAuth from "../helpers/withAuth";
import EventsPage from "../pages/events";

class AuthLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", auth: false };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //   redirection() {
  //     return <Redirect to={withAuth(EventsPage)} />;
  //   }

  //NOTES: https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router

  login(e) {
    e.preventDefault();
    axios
      .post("/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          this.setState({
            auth: true
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.auth === true) {
      return <Redirect to={withAuth(EventsPage)} />;
    }
    return (
      <div>
        <form onSubmit={this.login}>
          <label>
            Login
            <br />
            <br />
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default AuthLogin;
