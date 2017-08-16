//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

//Assets
import './NavBar.css';
import logo from '../../.././logo.svg';
import { Navbar , Icon, NavItem} from 'react-materialize';

class NavBar extends Component {

	static propTypes : {
		title: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired
	};
	 
  render() {
		
		const {items, title} = this.props;
		
    return (
			<div>
						
				<Navbar brand={title} right>
					<NavItem href='get-started.html'><Icon>search</Icon></NavItem>
					<NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
					<NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
					<NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
					{items && items.map((item,key)=><li key={key}><Link to={item.url}>{item.title}</Link></li>)}
				</Navbar>
			
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h3>Welcome to my super Fuking amazing dasboard</h3>
				</div>
			</div>
			
    );
  }
}

export default NavBar;