import React from 'react';

const List = ({ people }) => {

	return (
		<>
			{
				people.map((person) => {
					const { id, name, age, image } = person;
					return (
						<li key={id} className='person'>
							<img src={image} alt='profile'></img>
							<div>
								<h4>{name}</h4>
								<p>{age}</p>
							</div>
						</li>
					);
				})
			}
		</>
	);
};

export default List;
