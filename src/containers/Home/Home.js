// Dependencies 
import React, { Component } from 'react';
import { connect } from 'rext-redux';
import { PropTypes } from 'prop-types';

// Styles 
import './home.css';

class Home extends Component {
	
	static propTypes = {
		isMobile : PropTypes.bool,
	};
	
  render() {
		const {isMobile} = this.props;
    return (
      <div className="Home">
				<h2>Home Page</h2>
				<p>
					{isMobile ? 'Mobile device':'Desktop device '}
				</p>
      </div>
    );
  }
}

export default connect(state=>({
	isMobile: state.device.isMobile
}),null)(Home);