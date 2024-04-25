import React from 'react'
import s from './Header.module.css'
import handleNextCard from '../Shop/Shop'

function Header() {
	return (
		<div className={s.Header}>
			<a>sheika kai</a>
			<a>products</a>
			<a>contacts</a>
		</div>
	)
}

export default Header
