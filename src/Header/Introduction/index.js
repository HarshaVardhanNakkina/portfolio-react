import React from 'react'
import styles from '../header.module.scss'

const Introduction = () => {
	return (
		<section className={styles.introduction}>
			<h1 className={styles.heading}>
				Hi, I'm <span className='highlight'>HarshaVardhan</span>.
				<span className={styles.hello}>👋</span>
			</h1>
			<h2 className={styles.intro}>
				<span>
					I am Web Developer, Programmer. I am currently doing my Masters in Information
					Security at
					<a href='https://www.nitk.ac.in/'>
						<span className='highlight'>NITK, Surathkal</span>
					</a>
					.
				</span>
			</h2>
		</section>
	)
}

export default Introduction
