import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ itemList, removeItem, editItem }) => {

	return (
		<ul className='list'>
			{
				itemList.map((item, index) => {
					const { id, title } = item;
					return (
						<article className='item'>
							<li key={id}>{title}</li>
							<div className="btn-container">
								<button className='edit-btn' onClick={() => editItem(id)}><FaEdit /></button>
								<button className='delete-btn' onClick={() => removeItem(id)}><FaTrash /></button>
							</div>
						</article>
					);
				})
			}
		</ul>
	);
};

export default List;
