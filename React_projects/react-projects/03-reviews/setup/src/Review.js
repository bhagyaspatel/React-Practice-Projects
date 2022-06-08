import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

	const [index, setIndex] = useState(0);
	const [user, setUser] = useState(people[index]);

	const changeUserRight = () => {
		setIndex((index + 1) % people.length);
		setUser(people[index]);
	};

	const changeUserLeft = () => {
		setIndex((index - 1 + people.length) % people.length);
		setUser(people[index]);
	};

	const giveRandom = () => {
		let newIndex = Math.floor((Math.random() * people.length));
		console.log(newIndex);
		if (newIndex === index)
			newIndex = (1 + newIndex) % people.length;

		setIndex(newIndex);
		setUser(people[index]);
	};

	return (
		<>
			<div className='review'>
				<div className='img-container'>
					<img className='person-img' src={user.image}></img>
					<span className='quote-icon'>
						<FaQuoteRight />
					</span>
				</div>
				<div className='author'><h3>{user.name}</h3></div>
				<div className='job'><h4>{user.job}</h4></div>
				<article className='info'>
					<p>{user.text}</p>
				</article>
				<div className='toggle-review'>
					<FaChevronLeft onClick={changeUserLeft} />
					<FaChevronRight onClick={changeUserRight} />
				</div>
				<button className='random-btn' onClick={giveRandom}>Surprise Me</button>
			</div>
		</>
	);
};

export default Review;
