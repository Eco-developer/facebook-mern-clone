import { 
	SET_POSTS,
	SET_POST,
	UPDATE_POST,
	DELETE_POST,
} from '../Const/action-types.js';

const postsReducer = (state = [], action) => {
	switch(action.type) {
		case SET_POSTS: {
			const updatedState = [...action.payload]
			return  updatedState;
		}
		case SET_POST: {
			const updatedState = [action.payload, ...state]
			return  updatedState;
		}
		case UPDATE_POST: {
			const updatedState = state.map(item => item._id === action.payload._id ? {...item, ...action.payload} : item)
			return  updatedState;
		}
		case DELETE_POST: {
			const updatedState = state.filter(item => item._id !== action.payload)
			return  updatedState;
		}
		default:
			return state;
	}
}

export default postsReducer;