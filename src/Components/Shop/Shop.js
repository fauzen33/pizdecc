import React, { useState } from 'react'
import Products from './Products' // импортируем массив данных Products
import s from './Shop.module.css'

function Shop() {
	const [currentProducts, setCurrentProducts] = useState([])

	const handleNextCard = () => {
		const newProductIndex = Math.floor(Math.random() * Products.length)
		const newProduct = Products[newProductIndex]

		setCurrentProducts([...currentProducts, newProduct])
	}

	return (
		<div className={s.Container}>
			<div className={s.Button}>
				<button onClick={handleNextCard}>Добавить товар</button>
			</div>
			<div className={s.ShopContainer}>
				{currentProducts.map((product, index) => (
					<div key={index} className={s.Card}>
						<img src={product.photo} alt='Product' />
						<p>{product.title}</p>
						<p>{product.price}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Shop
