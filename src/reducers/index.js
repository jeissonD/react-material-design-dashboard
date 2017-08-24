//  Dependencies 
import { combineReducer } from 'redux';

// Shared Reducers 
import device from './deviceReducer';

const rootReducer  = combineReducer({
	device
});

export default rootReducer;