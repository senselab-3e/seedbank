import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthLogin from "../components/AuthLogin";
import AuthSignup from "../components/AuthSignup";
import AuthLogout from "../components/AuthLogout";

export class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathway: this.props.location.state.route
    };
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

// const AuthPage = () => {
// 	return (
// 		<div>
// 			<AuthLogin/>
// 			<br/><br/>
// 			<AuthSignup/>
// 			<br/><br/>
// 			<Link to='/'>Back to entryway</Link>
// 			<br/><br/>
// 			<AuthLogout/>
// 		</div>
// 	);
// }
