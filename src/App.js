import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
// import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import { Loading } from './Loading'

import './App.scss'
import loadable from '@loadable/component'

const LoadableAbout = loadable(() => import('./About'), {
	fallback: <Loading />
})

const App = () => {
	return (
		<Router>
			<Header />
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<LoadableAbout />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
