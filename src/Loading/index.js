import React, { useEffect, useState } from 'react'

import styles from './loading.module.scss'

export const Loading = () => {
	const emojis = ['😯', '😦', '😧', '😮', '😲']
	const [index, setIndex] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(ind => (ind + 1) % 5)
		}, 300)
		return () => clearInterval(interval)
	}, [])
	return <div className={styles.loading_emojis}>{emojis[index]}</div>
}
