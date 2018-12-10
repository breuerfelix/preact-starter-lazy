import 'styles/main.scss';

import { h, render, Component } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import NavBar from 'core/navbar';
import Home from 'sites/home';
import { About, Projects } from 'sites/async';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Router>
					<Home default path="/" />
					<AsyncRoute
						path="/about"
						getComponent={About}
					/>
					<AsyncRoute
						path="/projects"
						getComponent={Projects}
					/>
				</Router>			
				<div>
					footer
				</div>
			</div>
		);
	}
}

render(<App />, document.body);
