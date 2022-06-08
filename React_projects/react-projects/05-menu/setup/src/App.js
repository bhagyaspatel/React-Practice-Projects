import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//using set DS to have all unique categories from our data
//allCategories[] will also have 'all'; using spread operator to inlcude other categories in the array .
const allCategories = ['all', ...new Set(items.map((item) => item.category
))];


function App() {

	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all')
			setMenuItems(items);

		else {
			const newItems = items.filter((item) => item.category === category);
			setMenuItems(newItems);
		}
	};

	return (
		<menu>
			<section className='menu'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>
				<Categories filterItems={filterItems} allCategories={allCategories} />
				<Menu items={menuItems} />
			</section>
		</menu>
	);
}

export default App;
