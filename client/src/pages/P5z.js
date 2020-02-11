import React from 'react';
import { Link } from 'react-router-dom';
import Twizzle from './Twizzle';
import Shape from './Shape';

const P5z = () => {
	return (
		<div>
			<Twizzle/>
			<Shape/>
			<br/><br/>
			<Link to='/'>Back to entryway</Link>
		</div>
	);
}

export default P5z;
