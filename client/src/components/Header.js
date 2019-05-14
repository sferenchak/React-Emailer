import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<a href='#' className='brand-logo'>
						React-Emailer
					</a>
					<ul id='nav-mobile' className='right hide-on-small-and-down'>
						<li>
							<a href='sass.html'>Login with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
