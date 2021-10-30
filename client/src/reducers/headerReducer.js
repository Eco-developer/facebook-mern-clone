import { SET_HEADER } from '../Const/action-types.js';
import { SET_DEFAULT_HEADER } from '../Const/action-types.js';
import { HOME } from '../Const/header.js';

const intitialState = {
	[HOME]: true
}

const headerReducer = (state = intitialState, action) => {
	switch(action.type) {
		case SET_HEADER: {
			const arr = Object.keys(state);
			const obj = {};
		
			arr.forEach((item) => {
				obj[item] = false;
			});
			const newState = { ...obj, [action.payload]: true}
			return newState;
		};
		case SET_DEFAULT_HEADER: 
			return {};
		default:
			return state;
	}
}

export default headerReducer;