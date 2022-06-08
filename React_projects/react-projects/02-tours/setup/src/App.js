import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project';

function App() {

	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newList = tours.filter((tour) => tour.id !== id);
		setTours(newList);
	};

	const fetchData = () => {
		setIsLoading(true);

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((tours) => {
				setTours(tours);
				setIsLoading(false);
				console.log("tours " + tours);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	if (tours.length === 0) {
		return (
			<div className='title'>
				<h1>No tour packages vailable</h1>
				<button className='btn' onClick={fetchData}>Find Tours</button>
			</div>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App;
