import React, { Component } from 'react';
import Title from './Title';
import { FaHiking, FaShuttleVan, FaMotorcycle, FaMedkit } from 'react-icons/fa';

export class Services extends Component {
	state = {
		services: [
			{
				id: 1,
				icon: <FaMotorcycle />,
				title: 'free bike rental',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus.'
			},
			{
				id: 2,
				icon: <FaHiking />,
				title: 'free guided mini-hike',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus.'
			},
			{
				id: 3,
				icon: <FaShuttleVan />,
				title: 'airport pick up',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus.'
			},
			{
				id: 4,
				icon: <FaMedkit />,
				title: 'medical assistance',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus.'
			}
		]
	};
	render() {
		return (
			<section className='services'>
				<Title title='services' />
				<div className='services-center'>
					{this.state.services.map((service) => {
						return (
							<article key={service.id} className='service'>
								<span> {service.icon} </span>
								<h6>{service.title}</h6>
								<p>{service.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}

export default Services;
