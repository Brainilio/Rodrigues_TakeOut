import React from "react"
import ProfilePicture from "../assets/profile.png"

const About = (props) => {
	return (
		<div className="about">
			<div className="about-text">
				<h1 className="about-text-header">About Rodrigues</h1>
				<p className="about-text-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
					quasi exercitationem veniam eligendi. Praesentium necessitatibus,
					repellendus quo magni quisquam a laboriosam eum quaerat sequi maiores,
					optio eligendi. Minima, tenetur aperiam!
				</p>
				{/* <button className='see-menu'>	
						<strong>SEE MENU</strong>
					</button> */}
			</div>
			<img className="picture" alt="brainilio" src={ProfilePicture} />
		</div>
	)
}

export default About
