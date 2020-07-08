import React from "react"
import BackgroundImage from "../assets/background.jpg"

import Button from "../components/Button"

const Landing = (props) => {
	return (
		<>
			<div className="landing">
				<img src={BackgroundImage} alt="" />
				<div className="landing-logo">
					<h1>Rodrigues</h1>
					<span>Takeout</span>
				</div>
				<Button>SEE MENU</Button>
			</div>
		</>
	)
}

export default Landing
