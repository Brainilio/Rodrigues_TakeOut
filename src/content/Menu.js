import React from "react"

import MenuDivider from "../components/MenuDivider"
import CardSize from "../components/CardSize"
import CardSauce from "../components/CardSauce"
import ItemDescription from "../components/Item_Description"

const Menu = (props) => {
	let sizes = props.item.sizes.map((size, index) => (
		<CardSize
			key={index}
			sizeName={size.name}
			Amount={size.amount}
			price={size.price}
		/>
	))
	let sauces = props.item.sauces.map((sauce, index) => (
		<CardSauce key={index} sauceName={sauce} />
	))

	return (
		<>
			<div className='menu-divider'>
				<h1>MENU</h1>
			</div>
			<div className='menu-page'>
				<ItemDescription
					name="RODRIGUES' WINGS"
					description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
					quisquam voluptatem voluptates dignissimos saepe incidunt vitae, culpa
					nostrum earum voluptatum doloremque ab mollitia, deleniti totam optio
					ipsam facere id recusandae.'
				/>
				<MenuDivider title='CHOOSE YOUR SIZE' />
				<div className='size-row'>{sizes}</div>
				<MenuDivider title='CHOOSE YOUR SAUCE' />
				<div className='size-row'>{sauces}</div>
			</div>
		</>
	)
}

export default Menu
