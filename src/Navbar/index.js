import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<NavLink
				exact
				to='/'
				className={styles.nav_link}
				activeClassName={styles.nav_link_active}
			>
				Bio
			</NavLink>
			<NavLink
				exact
				to='/projects'
				className={styles.nav_link}
				activeClassName={styles.nav_link_active}
			>
				Projects
			</NavLink>
		</nav>
	)
}

export default Navbar
