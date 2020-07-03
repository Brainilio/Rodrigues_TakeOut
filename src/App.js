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
			<div className='menu-divider'>
				<h1>MENU</h1>
			</div>
			<div className='menu-page'>
				<div className='about-items'>
					{/* description */}
					<div className='wings-description'>
						<h1 className='wings-description-header'>RODRIGUES' WINGS</h1>
						<p className='wings-description-paragraph'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
							quisquam voluptatem voluptates dignissimos saepe incidunt vitae,
							culpa nostrum earum voluptatum doloremque ab mollitia, deleniti
							totam optio ipsam facere id recusandae.
						</p>
					</div>
					<div className='wings-picture'></div>
				</div>

				{/* choose your size */}

				<div className='side-divider'>
					<h1>CHOOSE YOUR SIZE</h1>
				</div>

				{/* size row */}
				<div className='size-row'>
					{/* Single item */}
					<div className='chicken-item-size'>
						<div className='chicken-item-picture'></div>
						{/* Single item description  */}
						<span>Regular</span>
						<h3>48 Wings</h3>
						<h1>€25</h1>
					</div>
					<div className='chicken-item-size'>
						<div className='chicken-item-picture'></div>
						{/* Single item description  */}
						<span>Regular</span>
						<h3>48 Wings</h3>
						<h1>€25</h1>
					</div>
					<div className='chicken-item-size'>
						<div className='chicken-item-picture'></div>
						{/* Single item description  */}
						<span>Regular</span>
						<h3>48 Wings</h3>
						<h1>€25</h1>
					</div>
				</div>

				<div className='side-divider'>
					<h1>KICK UP SOME SAUCE</h1>
				</div>
			</div>
		</>
	)
}

export default App
