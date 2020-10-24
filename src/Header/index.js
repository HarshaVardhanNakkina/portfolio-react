import React from 'react'

import Introduction from './Introduction'
import ContactDetails from './ContactDetails'
import styles from './header.module.scss'

const Header = () => {
	return (
		<header className={styles.header_container}>
			<Introduction />
			<ContactDetails />
			<div className={styles.hrline}></div>
		</header>
	)
}

export default Header
