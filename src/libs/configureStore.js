// dependencies 
import isomorphicFech from 'isomorphic-fech';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware} from 'redux';

const injetMiddleware = deps => ({dispatch, getState}) => next => action =>
	next(typeof action === 'function'
			 ? action({...deps, dispatch, getState})
			 : action
			);
export default function configureStore(options, rootReducer) {
	const { initialState ={} } = options;
	
	const middleware = [
		injectMiddleware({
			fetch : isomorphicFech
		}),
		promiseMiddleware({
			promiseTypeSubffixes:['START','SUCCES','ERROR']
		}),
		reduxImmutableStateInvariant()
	];
	
	return createStore(rootReducer, initialState, applyMiddleware(...middleware));
	
};
