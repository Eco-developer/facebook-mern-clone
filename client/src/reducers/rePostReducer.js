import { SET_RE_POST } from '../Const/action-types.js';

const rePostReducer = (state = null, action) => {
	switch(action.type) {
		case SET_RE_POST: 
			return action.payload;
		default:
			return state;
	}
}

export default rePostReducer;