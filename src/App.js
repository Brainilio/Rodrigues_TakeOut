import React, { Component } from "react"

// Page sections
import Landing from "./content/Landing"
import About from "./content/About"
import Menu from "./content/Menu"
import Contact from "./content/Contact"

class App extends Component {
	state = {
		menu: {
			chicken: {
				sizes: [
					{
						name: "Regular",
						amount: 48,
						price: 25,
					},
					{
						name: "Double",
						amount: 64,
						price: 35,
					},
					{
						name: "Party",
						amount: 100,
						price: 45,
					},
				],
				sauces: [
					"Hot 'n Spicy",
					"Garlic & Herbs",
					"Original BBQ",
					"Sweet 'n Spicy",
					"Teriyaki Glaze",
					"Maple BBQ",
				],
			},
		},
	}
	render() {
		return (
			<>
				<Landing />
				<About />
				<Menu item={this.state.menu.chicken} />
				<Contact />
			</>
		)
	}
}

export default App
