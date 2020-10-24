import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import './App.scss'

const App = () => {
	return (
		<Router>
			<Header />
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<About />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
