import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar_items_list}>
				<li className={styles.nav_item}>
					<NavLink
						exact
						to='/'
						className={styles.nav_link}
						activeClassName={styles.nav_link_active}
					>
						About Me
					</NavLink>
				</li>
				<li className={styles.nav_item}>
					<NavLink
						exact
						to='/projects'
						className={styles.nav_link}
						activeClassName={styles.nav_link_active}
					>
						Projects
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
