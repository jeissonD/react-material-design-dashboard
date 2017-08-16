// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
// Components
import NavBar from './components/Global/NavBar/NavBar'
import Footer from './components/Global/Footer/Footer'
import Content from './components/Global/Content/Content'

//Assets
import items from './data/menuData'
import './App.css';

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