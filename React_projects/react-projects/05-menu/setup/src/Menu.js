import React from 'react';

const Menu = ({ items }) => {


	return (
		<div className='items'>
			{items.map((menuItems) => {
				const { id, title, img, desc, price } = menuItems;
				return (
					<article key={id} className='food'>
						<img src={img} alt='foodImage'></img>
						<div className='info'>
							<header>
								<h3>{title}</h3>
								<h4 className='priceName'>${price}</h4>
							</header>
							<p>{desc}</p>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default Menu;
