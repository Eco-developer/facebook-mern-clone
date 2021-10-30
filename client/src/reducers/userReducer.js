import { SET_USER } from '../Const/action-types.js';

const userReducer = (state = null, action) => {
	switch(action.type) {
		case SET_USER: {
			return action.payload;
		}
		default:
			return state;
	}
}

export default userReducer;