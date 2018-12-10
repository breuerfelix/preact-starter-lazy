import 'styles/navbar.scss';

import { h, render, Component } from 'preact';

export default class NavBar extends Component {
	render() {
		return (
			<div class='navbar'>
				<a href='/preact-starter-lazy/'>home</a>
				<a href='/preact-starter-lazy/projects'>projects</a>
				<a href='/preact-starter-lazy/about'>about</a>
			</div>
		);
	}
}
