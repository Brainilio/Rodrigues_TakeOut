import React from "react"

const ItemDescription = (props) => {
	return (
		<div className='about-items'>
			<div className='wings-description'>
				<h1 className='wings-description-header'>{props.name}</h1>
				<p className='wings-description-paragraph'>{props.description}</p>
			</div>
			<div className='wings-picture'></div>
		</div>
	)
}

export default ItemDescription
