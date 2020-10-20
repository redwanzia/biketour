import React, { Component } from 'react';
import items from './data';
import Client from './Contentful';

const TourContext = React.createContext();

class TourProvider extends Component {
	state = {
		tours: [],
		sortedTours: [],
		featuredTours: [],
		loading: true,
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minLength: 0,
		maxLength: 0,
		breakfast: false,
		guidedTour: false
	};
	// get data

	getData = async () => {
		try {
			let response = await Client.getEntries({ content_type: 'motorcycleTour' });
			let tours = this.formatData(response.items);
			let featuredTours = tours.filter((tour) => tour.featured === true);
			let maxPrice = Math.max(...tours.map((item) => item.price));
			let maxLength = Math.max(...tours.map((item) => item.length));

			this.setState({
				tours,
				featuredTours,
				sortedTours: tours,
				loading: false,
				price: maxPrice,
				maxPrice,
				maxLength
			});
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		this.getData();
	}
	formatData(items) {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let tour = { ...item.fields, images, id };
			return tour;
		});
		return tempItems;
	}
	getTour = (slug) => {
		let tempTours = [ ...this.state.tours ];
		const tour = tempTours.find((tour) => tour.slug === slug);
		return tour;
	};

	handleChange = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = e.target.name;
		this.setState(
			{
				[name]: value
			},
			this.filterTours
		);
	};

	filterTours = () => {
		let { tours, type, capacity, price, maxLength, minLength, breakfast, guidedTour } = this.state;
		// all the tours
		let tempTours = [ ...tours ];
		// transform value
		capacity = parseInt(capacity);
		price = parseInt(price);
		// filter type
		if (type !== 'all') {
			tempTours = tempTours.filter((tour) => tour.type === type);
		}

		// filter by capacity
		if (capacity !== 1) {
			tempTours = tempTours.filter((tour) => tour.capacity >= capacity);
		}

		// filter by price
		tempTours = tempTours.filter((tour) => tour.price <= price);

		// filter by length
		tempTours = tempTours.filter((tour) => tour.length >= minLength && tour.length <= maxLength);

		// filter by breakfast
		if (breakfast) {
			tempTours = tempTours.filter((tour) => tour.breakfast === true);
		}

		// filter by guidedTour

		if (guidedTour) {
			tempTours = tempTours.filter((tour) => tour.guidedTour === true);
		}

		// change state
		this.setState({
			sortedTours: tempTours
		});
	};
	render() {
		return (
			<TourContext.Provider value={{ ...this.state, getTour: this.getTour, handleChange: this.handleChange }}>
				{this.props.children}
			</TourContext.Provider>
		);
	}
}

const TourConsumer = TourContext.Consumer;

export function withTourConsumer(Component) {
	return function ConsumerWrapper(props) {
		return <TourConsumer>{(value) => <Component {...props} context={value} />}</TourConsumer>;
	};
}

export { TourProvider, TourConsumer, TourContext };
