import React from "react"

const CardSauce = (props) => {
	return (
		<div className='chicken-item-size'>
			<div className='chicken-item-picture'></div>
			<h3>{props.sauceName}</h3>
		</div>
	)
}

export default CardSauce
