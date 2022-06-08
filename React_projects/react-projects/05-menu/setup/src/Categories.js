import React from 'react';

const Categories = ({ filterItems, allCategories }) => {

	console.log(allCategories);
	return (
		<div className='category-list'>
			{
				allCategories.map((category, index) => {
					return <button key={index} onClick={() => filterItems(category)}>{category}</button>;
				})
			}
		</div>
	);
};

export default Categories;
