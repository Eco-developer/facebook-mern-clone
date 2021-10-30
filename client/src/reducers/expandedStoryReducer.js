import { SET_EXPANDED_STORY } from '../Const/action-types.js';

const expandedStoryReducer = (state = null, action) => {
	switch(action.type) {
		case SET_EXPANDED_STORY: 
			return action.payload;
		default:
			return state;
	}
}

export default expandedStoryReducer;