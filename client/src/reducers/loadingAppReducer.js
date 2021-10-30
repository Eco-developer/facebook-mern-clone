import { LOADING_APP } from '../Const/action-types.js';

const loadingAppReducer = (state = true, action) => {
	switch(action.type) {
		case LOADING_APP: 
			return  action.payload;
		default:
			return state;
	}
}

export default loadingAppReducer;