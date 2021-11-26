import { SET_RECIPIENT_TARGET } from '../Const/action-types.js';

const recipientTargetReducer = (state = null, action) => {
	switch(action.type) {
		case SET_RECIPIENT_TARGET: 
			return action.payload;
		default:
			return state;
	}
}

export default recipientTargetReducer;