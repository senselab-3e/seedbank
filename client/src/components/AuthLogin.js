import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AuthLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", authorize: false };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

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
            authorize: true
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.authorize) {
      console.log("authorized");
      return <Redirect to={`${this.props.pathway}`} />;
    } else {
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
}

export default AuthLogin;
