import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {

	const [jobs, setJobs] = useState([]);
	const [jobIndex, setIndex] = useState(0);
	const [isLoading, setLoading] = useState(true);

	const fetchData = async () => {
		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setJobs(data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return (
			<section className='section loading'>
				<h1>Loading ...</h1>
			</section>
		);
	}

	const { title, dates, duties, company } = jobs[jobIndex];

	return (
		<section className='section'>
			<div className="title">
				<h2>expirence</h2>
				<div className="underline"></div>
			</div>

			<div className="job-center">
				<div className='btn-container'>
					{jobs.map((item, index) => {
						return (
							<button onClick={() => setIndex(index)} className={`job-btn ${index === jobIndex && 'active-btn'}`}>
								{item.company}
							</button>
						);
					})}
				</div>

				<article className="job_info">
					<h3>{title}</h3>
					<h4 className='company'>{company}</h4>
					<h4>{dates}</h4>
					<section className="info">
						{duties.map((duty, index) => {
							return (
								<div className='job-description' key={index}>
									<p>
										<FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
										{duty}
									</p>
								</div>
							);
						})}
					</section>
				</article>
			</div>
		</section>
	);
}

export default App;
