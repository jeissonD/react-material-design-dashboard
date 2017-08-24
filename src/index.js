// Dependencies
import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import BlueBird from 'bluebird';
import { provider } from 'react-redux'; 

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';

// Redux storage 
import configureStore from './libs/configureStore';

// Reducer 
import rootReducer from './Reducers';

// Bluebird configuration 
window.Promise = Bluebird; 

BlueBird.config({warnings: false});

window.addEventListener('unhandlerejection', error =>{
	error.preventDefault();
	if(process.env.NODE_EVENTS !== 'production'){
		console.warn('Unhandled promise projection warnin', error.detail);
	}
});

// Configure redux store 
const store = configureStore({
	initialState: window.initialState
}, rootReducer);

render(
	<Provide store={store}>
		<Router>
			<AppRoutes/>
		</Router>
	</Provide>
	, document.getElementById('root')
);
registerServiceWorker();
