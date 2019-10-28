import React from 'react';
import { Link } from 'react-router-dom';
import AuthLogin from '../components/AuthLogin';
import AuthSignup from '../components/AuthSignup';
import AuthLogout from '../components/AuthLogout';
import "../components/AuthTest";

const AuthPage = () => {
	return (
		<div>
			<AuthLogin/>
			<br/><br/>
			<AuthSignup/>
			<br/><br/>
			<Link to='/'>Back to entryway</Link>
			<br/><br/>
			<AuthLogout/>
		</div>
	);
}

export default AuthPage;