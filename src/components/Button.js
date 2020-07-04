import React from "react"

const Button = (props) => {
	return (
		<button onClick={props.clicked} className='cta--buton'>
			<strong>{props.children}</strong>
		</button>
	)
}

export default Button
