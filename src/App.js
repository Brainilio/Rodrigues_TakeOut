import React, { Component } from "react"

// Page sections
import Landing from "./content/Landing"
import About from "./content/About"
import Menu from "./content/Menu"
import Contact from "./content/Contact"

class App extends Component {
	render() {
		return (
			<>
				<Landing />
				<About />
				<Menu />
				<Contact />
			</>
		)
	}
}

export default App
