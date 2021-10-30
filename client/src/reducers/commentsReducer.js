import { 
	SET_COMMENTS,
	SET_COMMENT,
} from '../Const/action-types.js';

const commentsReducer = (state = [], action) => {
	switch(action.type) {
		case SET_COMMENTS: {
			const updatedState = [...action.payload]
			return  updatedState;
		}
		case SET_COMMENT: {
			const updatedState = [action.payload, ...state]
			return  updatedState;
		}
		default:
			return state;
	}
}

export default commentsReducer;