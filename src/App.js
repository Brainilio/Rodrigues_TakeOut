import React from "react"

function App() {
	return (
		<>
			<div className='landing'>
				<div className='landing-logo'>
					<h1>Rodrigues</h1>
					<span>Takeout</span>
				</div>
				<button>
					<strong>ORDER NOW</strong>
				</button>
			</div>
			<div className='about'>
				<div className='about-text'>
					<h1 className='about-text-header'>About Rodrigues</h1>
					<p className='about-text-paragraph'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
						quasi exercitationem veniam eligendi. Praesentium necessitatibus,
						repellendus quo magni quisquam a laboriosam eum quaerat sequi
						maiores, optio eligendi. Minima, tenetur aperiam!
					</p>
					<button className='see-menu'>
						<strong>SEE MENU</strong>
					</button>
				</div>
				<div className='picture'></div>
			</div>
		</>
	)
}

export default App
