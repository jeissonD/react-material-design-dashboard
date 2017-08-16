//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './Footer.css';

class Footer extends Component {

	static propTypes : {
		copiright: PropTypes.string.isRequired,
	};
	 
  render() {
		
		const {copiright} = this.props;
		
    return (
			<div className="Footer">
				<ul>
					<li>Home</li>
					<li>{copiright}</li>
				</ul>
			</div>
    );
  }
}

export default Footer;