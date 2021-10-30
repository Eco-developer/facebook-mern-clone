import { LOADING_PROFILE } from '../Const/action-types.js';

const loadingProfileReducer = (state = true, action) => {
	switch(action.type) {
		case LOADING_PROFILE: 
			return  action.payload;
		default:
			return state;
	}
}

export default loadingProfileReducer;