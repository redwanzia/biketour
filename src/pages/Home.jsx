import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner.jsx';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedTours from '../components/FeaturedTours';

const Home = () => {
	return (
		<React.Fragment>
			<Hero>
				<Banner title='twoWheeler tours' subtitle='Tours starting at $4550'>
					<Link to='/tours' className='btn-primary'>
						our tours
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedTours />
		</React.Fragment>
	);
};

export default Home;
