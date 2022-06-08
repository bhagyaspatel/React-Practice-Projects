import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
	let list = localStorage.getItem('itemList');

	if (list) {
		return JSON.parse(localStorage.getItem('itemList'));
	}
	else {
		return [];
	}

};

function App() {

	const [item, setItem] = useState('');
	const [itemList, setItemList] = useState(getLocalStorage());
	const [isEditing, setEditing] = useState(false);
	const [editId, setEditId] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

	const handle = (e) => {
		e.preventDefault();

		if (!item) {
			// setAlert({ show: true, msg: 'Please Enter the item', type: 'danger' });

			showAlert(true, 'Please Enter the item', 'danger');
		}
		else if (item && isEditing) {
			//deal with editing
			//edited - alert
			setItemList(itemList.map((eachItem) => {
				if (eachItem.id === editId)
					return ({ ...eachItem, title: item });
				return eachItem;
			}));
			setEditing(false);
			showAlert(true, 'Item edited', 'success');
			setItem('');
		}
		else {
			//added - alert
			showAlert(true, 'Item Added', 'success');
			const newItem = { id: new Date().getTime().toString(), title: item };
			setItemList([...itemList, newItem]);
			setItem('');
		}
	};

	const showAlert = (show = false, msg = '', type = '') => {
		// setAlert({show:show, msg:msg, type:type}) ;
		setAlert({ show, msg, type });
	};

	const clearList = (() => {
		showAlert(true, 'List empty', 'danger');
		setItemList('');
	});

	const removeItem = (id) => {
		showAlert(true, 'Item delted', 'danger');
		let newList = itemList.filter((item) => item.id !== id);
		setItemList(newList);
	};

	const editItem = (id) => {
		const specificItem = itemList.find((item) => item.id === id);
		setEditing(true);
		setEditId(id);
		setItem(specificItem.title);
	};

	useEffect(() => {
		localStorage.setItem('itemList', JSON.stringify(itemList));
	}, [itemList]);

	return (
		<section className='card'>
			{alert.show && <Alert {...alert} showAlert={showAlert} itemList={itemList} />}

			<h2>Grocery Bud</h2>

			<form className="input-item" onSubmit={handle}>
				<input type="text" placeholder='e.g.eggs' value={item} onChange={(e) => setItem(e.target.value)} />
				<button type='submit' className="btn">{isEditing ? 'edit' : 'submit'}</button>
			</form>

			{itemList.length > 0 &&
				<div className="list">
					<List itemList={itemList} removeItem={removeItem} editItem={editItem} />
					<button className="clear-btn" onClick={clearList}>Clear List</button>
				</div>
			}
		</section>
	);
}

export default App;
