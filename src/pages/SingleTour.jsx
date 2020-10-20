import React, { Component } from 'react';
import defaultBcg from '../images/tour-10.jpg';
import { Link } from 'react-router-dom';
import { TourContext } from '../context.js';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

export class SingleTour extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		};
	}
	static contextType = TourContext;

	// componentDidMount() {}

	render() {
		const { getTour } = this.context;
		const tour = getTour(this.state.slug);
		if (!tour) {
			return (
				<div className='error'>
					<h3>No tour found</h3>
					<Link to='/tours' className='btn-primary'>
						Back to tours
					</Link>
				</div>
			);
		}
		const { name, description, capacity, length, price, breakfast, extras, guidedTour, images } = tour;
		const [ mainImg, ...defaultImg ] = images;
		return (
			<React.Fragment>
				<StyledHero img={mainImg || this.state.defaultBcg} hero='toursHero'>
					<Banner title={`${name}`}>
						<Link to='/tours' className='btn-primary'>
							Back to Tours
						</Link>
					</Banner>
				</StyledHero>
				<section className='single-tour'>
					<div className='single-tour-images'>
						{defaultImg.map((item, index) => {
							return <img key={index} src={item} alt={name} />;
						})}
					</div>
					<div className='single-tour-info'>
						<article className='desc'>
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<article className='info'>
							<h3>info</h3>
							<h6>price: ${price}</h6>
							<h6>length:{length} Miles</h6>
							<h6>max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
							<h6> {guidedTour ? 'free guided tour' : 'no guided tour available'} </h6>
							<h6> {breakfast && 'free breakfast'} </h6>
						</article>
					</div>
				</section>
				<section className='tour-extras'>
					<h6>extras</h6>
					<ul className='extras'>
						{extras.map((item, index) => {
							return <li key={index}>- {item}</li>;
						})}
					</ul>
				</section>
			</React.Fragment>
		);
	}
}

export default SingleTour;
