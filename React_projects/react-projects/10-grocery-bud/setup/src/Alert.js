import React, { useEffect } from 'react';

const Alert = ({ msg, type, showAlert, itemList }) => {

	useEffect(() => {
		const timeOut = setTimeout(() => {
			showAlert();
		}, 3000);
	}, [itemList]);

	return (
		<p className={`alert ${type}`}>{msg}</p>
	);
};

export default Alert;
