// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
// Components
import NavBar from './Global/NavBar/NavBar'
import Footer from './Global/Footer/Footer'
import Content from './Global/Content/Content'

//Assets
import items from '../data/menuData'
import './css/App.css';

class App extends Component {

	static propTypes = {
		children: PropTypes.object.isRequired
	};

  render() {
		const { children } = this.props;
		
    return (
      <div className="App">
				<NavBar title="Codejobs" items={items}/>
        <Content body={children} />
        <Footer copiright="© 2017 Jeisson Lazo, made with love for a better web"/>
      </div>
    );
  }
}

export default App;