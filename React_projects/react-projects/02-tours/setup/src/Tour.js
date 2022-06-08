import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {

	const { id, name, info, image, price } = tour;

	const [readMore, setReadMore] = useState(false);

	return (
		<div className='single-tour'>
			<img src={image} alt='destiny' />
			<footer>
				<div className='tour-info'>
					<h3>{name}</h3>
					<h4 className='tour-price'>$ {price}</h4>
				</div>
				<p>
					{readMore ? info : `${info.substring(0, 100)}...`}
					<button onClick={() => setReadMore(!readMore)}>
						{readMore ? "show less" : "read more"}
					</button>
				</p>
				<button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
			</footer>
		</div>
	);
};

export default Tour;
