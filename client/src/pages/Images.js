import React from 'react';
import { Link } from 'react-router-dom';
import ImageCreate from '../components/ImageCreate';
// import ImageRecent from '../components/ImageRecent';

const ImagesPage = () => {
	return (
		<div>
			<ImageCreate/>
			<br/><br/>
			<Link to='/'>Back to entryway</Link>
		</div>
	);
}

export default ImagesPage;