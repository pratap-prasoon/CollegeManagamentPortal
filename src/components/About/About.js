import React from 'react';
import './About.scss';
function About() {
	return (
		<div id='About'>
			<h1 style={{ textAlign: 'center' }}>About The Application</h1>
			<div className='row'>
				<div className='col-md-6'>
					<p>
						This is a FULL STACK application (built using NODE.JS and REACT.JS). 
						
					</p>
					{/* <p>
						This app has no authentication (signup/login) system which means that any one can start using,
						adding into, removing from, and editing to this system{' '}
					</p> */}
				</div>
				<div className='col-md-6'>
					<p>
						This is a College Management System in which you can manage the College Teachers,
						Students and Subjects.
					</p>
					<p>Start using the app, navigate from the navbar at the right side :)</p>
				</div>
			</div>
		</div>
	);
}

export default About;