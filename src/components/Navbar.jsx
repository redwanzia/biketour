import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';

export class Navbar extends Component {
	state = {
		isOpen: false
	};

	handleToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<nav className='navbar'>
				<div className='nav-center'>
					<div className='nav-header'>
						<Link to='/' className='nav'>
							<img src={logo} alt='bike tour' />
						</Link>
						<button onClick={this.handleToggle} type='button' className='nav-btn'>
							<FaAlignRight className='nav-icon' />
						</button>
					</div>
					<ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
						<Link to='/'>Home</Link>
						<Link to='/tours'>Tours</Link>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
