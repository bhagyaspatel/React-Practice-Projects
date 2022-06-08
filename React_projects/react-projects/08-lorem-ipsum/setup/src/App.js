import React, { useState } from 'react';
import data from './data';

function App() {

	const [count, setCount] = useState(0);
	const [para, setPara] = useState([]);

	const handle = (e) => {
		e.preventDefault();

		let amount = parseInt(count); //count is a string (even though its a number but its not integer)
		//so we convert it to int

		if (count <= 0)
			amount = 1;

		else if (count >= 8)
			amount = 8;

		setPara(data.slice(0, amount));
	};

	return (
		<section className='sectionc'>
			<h2 className='title'>Tired of boring lorem ipsum ?</h2>
			<form className='lorem-form' onSubmit={handle}>
				<label htmlFor='amount'>Paragraphs:</label>
				<input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
				<button type='submit' className='generate-btn'>Generate</button>
			</form>
			<article className='lorem-text'>
				{para.map((item) => {
					return (<p> {item} </p>);
				})}
			</article>
		</section>
	);
}

export default App;
