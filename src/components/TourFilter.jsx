import React from 'react';
import { useContext } from 'react';
import { TourContext } from '../context';
import Title from './Title';

const getAllUniqueValues = (items, value) => {
	return [ ...new Set(items.map((item) => item[value])) ];
};

const TourFilter = ({ tours }) => {
	const context = useContext(TourContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minLength,
		maxLength,
		breakfast,
		guidedTour
	} = context;
	// get uniq types
	let types = getAllUniqueValues(tours, 'type');
	// add all types
	types = [ 'all', ...types ];
	// map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getAllUniqueValues(tours, 'capacity');
	people = people.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});

	return (
		<section className='filter-container'>
			<Title title='Search Tour' />
			<form className='filter-form'>
				<div className='form-group'>
					<label htmlFor='type'>tour type</label>
					<select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
						{types}
					</select>
				</div>
				{/* guests   */}

				<div className='form-group'>
					<label htmlFor='capacity'>guest</label>
					<select
						name='capacity'
						id='capacity'
						value={capacity}
						className='form-control'
						onChange={handleChange}
					>
						{people}
					</select>
				</div>

				{/* end of guests   */}

				{/* tour price   */}
				<div className='form-group'>
					<label htmlFor='price'>tours price ${price}</label>
					<input
						type='range'
						name='price'
						min={minPrice}
						max={maxPrice}
						id='price'
						value={price}
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				{/* end of tour price   */}

				{/* size   */}
				<div className='form-group'>
					<label htmlFor='length'>tour length</label>
					<input
						type='number'
						name='minLength'
						id='length'
						value={minLength}
						onChange={handleChange}
						className='length-input'
					/>
					<input
						type='number'
						name='maxLength'
						id='length'
						value={maxLength}
						onChange={handleChange}
						className='length-input'
					/>
				</div>
				{/* end of length  */}

				{/* extras */}
				<div className='form-group'>
					<div className='single-extra'>
						<input
							type='checkbox'
							name='breakfast'
							id='breakfast'
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor='breakfast'>breakfast</label>
					</div>

					<div className='single-extra'>
						<input
							type='checkbox'
							name='guidedTour'
							id='guidedTour'
							checked={guidedTour}
							onChange={handleChange}
						/>
						<label htmlFor='guidedTour'>Guided Tour</label>
					</div>
				</div>

				{/* end of extras */}
			</form>
		</section>
	);
};

export default TourFilter;
