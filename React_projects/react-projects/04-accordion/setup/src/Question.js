import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {

	const [show, setShow] = useState(false);

	const toglleInfo = () => {
		setShow(!show);
	};

	return (
		<article className='myBox'>
			<div className='myQuestion'>
				<h4>{title}</h4>
				<button className='myBtn' onClick={toglleInfo}>{show ? <AiOutlineMinus /> : <AiOutlinePlus />}</button >
			</div>
			{show && <p>{info}</p>}
		</article>
	);
};

export default Question;
