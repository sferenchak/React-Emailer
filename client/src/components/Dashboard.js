import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<div>Dashboard</div>
			<div className='fixed-action-btn'>
				<Link to='/surveys/new' className='btn-floating btn-large primary'>
					<i className='large material-icons'>add</i>
				</Link>
			</div>
		</>
	);
};

export default Dashboard;
