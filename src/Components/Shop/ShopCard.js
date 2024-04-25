import React from 'react'
import s from './Shop.module.css'
import Products from './Products'

function ShopCard() {
	var images = Math.floor(Math.random() * Products.length)
	var title = Products[images]

	return (
		<div className={s.Card}>
			<img src={title.photo} />
			<p>{title.title}</p>
		</div>
	)
}

export default ShopCard
