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
						amount: 16,
						price: 15,
					},
					{
						name: "Double",
						amount: 24,
						price: 20,
					},
					{
						name: "Party",
						amount: 48,
						price: 35,
					},
				],
				sauces: [
					"Classic Buffalo",
					"Garlic & Herbs",
					"Original BBQ",
					"Teriyaki Glaze",
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
