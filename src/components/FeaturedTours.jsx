import React, { Component } from 'react';
import { TourContext } from '../context';
import Loading from './Loading';
import Tour from './Tour';
import Title from './Title';

export class FeaturedTours extends Component {
	static contextType = TourContext;
	render() {
		let { loading, featuredTours: tours } = this.context;
		tours = tours.map((tour) => {
			return <Tour key={tour.id} tour={tour} />;
		});
		return (
			<section className='featured-tours'>
				<Title title='featuredTours' />
				<div className='featured-tours-center	'>{loading ? <Loading /> : tours}</div>
			</section>
		);
	}
}

export default FeaturedTours;
