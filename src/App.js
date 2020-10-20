import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Error from './pages/Error';
import Home from './pages/Home';
import Tours from './pages/Tours';
import SingleTour from './pages/SingleTour';
import Navbar from './components/Navbar';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/tours' component={Tours} />
				<Route exact path='/tours/:slug' component={SingleTour} />
				<Route component={Error} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
