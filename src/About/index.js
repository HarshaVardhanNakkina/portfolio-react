import React from 'react'

import styles from './about.module.scss'

const About = () => {
	return (
		<section className={styles.aboutme_container}>
			<p className={styles.description}>
				My full name is <span className='highlight'>Ganesh Surya Harsha Vardhan</span>. I am
				from India.
			</p>
			<p className={styles.description}>
				I did my bachelors in Computer Science and Engineering (2014 - 2018).
			</p>
			<p className={styles.description + ' ' + styles.experience}>
				I have been doing &#x2f; learning <span class='highlight'>Web Development</span> for >2
				years. I have pretty good experience in <span className='highlight'>HTML</span>,{' '}
				<span className='highlight'>CSS</span>,{' '}
				<span className='highlight'>JavaScript(es6)</span> and{' '}
				<span className='highlight'>React.js</span>. I have started using{' '}
				<span className='highlight'>SASS</span> recently. I have a considerable experience in
				server technologies like <span className='highlight'>Node.js</span> and{' '}
				<span className='highlight'>MongoDB</span>, <span className='highlight'>MySQL</span>{' '}
				databases. I am interested in learning new things about Web Dev, like,{' '}
				<span className='highlight'>Optimization</span>,{' '}
				<span className='highlight'>Accessibility</span>,{' '}
				<span className='highlight'>SEO</span> etc... I am an active follower of tech blogs{' '}
				<a href='https://dev.to'>
					<span className='highlight'>dev.to</span>
				</a>
				,{' '}
				<a href='https://medium.com/'>
					<span className='highlight'>medium.com</span>
				</a>
				{', '}
				and many more great web developers on Twitter and YouTube.
			</p>
			<p className={styles.description}>
				I am comfortable with <span className='highlight'>C/C++</span> and{' '}
				<span className='highlight'>Java</span>. I do competitive programming regularly on{' '}
				<a href='https://leetcode.com/harsha_n/'>
					<span className='highlight'>leetcode</span>
				</a>
				{', '}
				<a href='https://www.hackerrank.com/harshavardhan_n'>
					<span className='highlight'>hackerrank</span>
				</a>
				.
			</p>
		</section>
	)
}

export default About
