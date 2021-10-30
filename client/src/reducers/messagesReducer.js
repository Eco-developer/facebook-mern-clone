import { 
	SET_MESSAGES,
	SET_MESSAGE,
} from '../Const/action-types.js';

const messagesReducer = (state = [], action) => {
	switch(action.type) {
		case SET_MESSAGES: {
			const updatedState = [...action.payload]
			return  updatedState;
		}
		case SET_MESSAGE: {
			const updatedState = [action.payload, ...state]
			return  updatedState;
		}
		default:
			return state;
	}
}

export default messagesReducer;