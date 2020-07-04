import React from "react"

const CardSize = (props) => {
	return (
		<div className='chicken-item-size'>
			<div className='chicken-item-picture'></div>
			<span>{props.sizeName}</span>
			<h3>{props.Amount} Wings</h3>
			<h1>€{props.price}</h1>
		</div>
	)
}

export default CardSize
