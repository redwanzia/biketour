import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/tour-8.jpg';
import PropTypes from 'prop-types';

const Tour = ({ tour }) => {
	const { name, slug, images, price } = tour;

	return (
		<article className='tour'>
			<div className='img-container'>
				<img src={images[0] || defaultImg} alt='' />
				<div className='price-top'>
					<h6>${price}</h6>
				</div>
				<Link to={`/tours/${slug}`} className='btn-primary tour-link'>
					Features
				</Link>
			</div>
			<div className='tour-info'>{name}</div>
		</article>
	);
};

Tour.propTypes = {
	tour: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		price: PropTypes.number.isRequired
	})
};

export default Tour;
