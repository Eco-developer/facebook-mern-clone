import { SET_RESIPIENT_TARGET } from '../Const/action-types.js';

const resipientTargetReducer = (state = null, action) => {
	switch(action.type) {
		case SET_RESIPIENT_TARGET: 
			return action.payload;
		default:
			return state;
	}
}

export default resipientTargetReducer;