import React from "react"

const About = (props) => {
	return (
		<div className='about'>
			<div className='about-text'>
				<h1 className='about-text-header'>About Rodrigues</h1>
				<p className='about-text-paragraph'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
					quasi exercitationem veniam eligendi. Praesentium necessitatibus,
					repellendus quo magni quisquam a laboriosam eum quaerat sequi maiores,
					optio eligendi. Minima, tenetur aperiam!
				</p>
				{/* <button className='see-menu'>	
						<strong>SEE MENU</strong>
					</button> */}
			</div>
			<img
				className='picture'
				alt='brainilio'
				src='https://via.placeholder.com/50'
			/>
		</div>
	)
}

export default About
