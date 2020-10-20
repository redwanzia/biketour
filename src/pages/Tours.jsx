import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import TourContainer from '../components/TourContainer';

const Tours = () => {
	return (
		<React.Fragment>
			<Hero hero={'toursHero'}>
				<Banner title='our tours'>
					<Link to='/tours' className='btn-primary'>
						tours
					</Link>
				</Banner>
			</Hero>
			<TourContainer />
		</React.Fragment>
	);
};

export default Tours;
