import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import app from "./axiosConfig";

// wraps component in router config to require authentication

export default function withAuth(ComponentToProtect, intendedPath) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
        intendedPath: "",
        message: ""
      };
    }
    componentDidMount() {
      const headers = {
        authorization: "Bearer " + localStorage.getItem("token")
      };
      //create message to display on top of login
      //how the parameter path is being passed to this component should be refactored. this can be done by passing it through state. but it's ok for now
      if (intendedPath) {
        this.setState({
          intendedPath: intendedPath
        });
        let text = intendedPath.slice(1);
        text = text.replace(/-/g, " ");
        this.setState({
          message: `Please log in to access ${text}`
        });
      } else {
        this.setState({
          message: "Please log in"
        });
      }

      axios
        .get("/api/auth/verify", { headers: headers })
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            this.setState({ loading: false, redirect: true });
          }
        })
        .catch(err => {
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return (
          <React.Fragment>
            <Redirect
              to={{
                pathname: "/auth",
                state: { route: intendedPath, message: this.state.message }
              }}
            />
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  };
}
