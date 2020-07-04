import React from "react"

import MenuDivider from "../components/MenuDivider"
import CardSize from "../components/CardSize"
import CardSauce from "../components/CardSauce"
import ItemDescription from "../components/Item_Description"

const Menu = (props) => {
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
				<div className='size-row'>
					<CardSize sizeName='Regular' Amount='48 Wings' price={25} />
					<CardSize sizeName='Double' Amount='64 Wings' price={35} />
					<CardSize sizeName='Party' Amount='100 Wings' price={45} />
				</div>
				<MenuDivider title='CHOOSE YOUR SAUCE' />
				<div className='size-row'>
					<CardSauce sauceName="Hot 'n Spicy" />
					<CardSauce sauceName="Hot 'n Spicy" />
					<CardSauce sauceName="Hot 'n Spicy" />
					<CardSauce sauceName="Hot 'n Spicy" />
					<CardSauce sauceName="Hot 'n Spicy" />
					<CardSauce sauceName="Hot 'n Spicy" />
				</div>
			</div>
		</>
	)
}

export default Menu
