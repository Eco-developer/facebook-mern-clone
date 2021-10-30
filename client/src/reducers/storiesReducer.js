import { 
	SET_STORIES,
	SET_STORY,
	DELETE_STORY,
} from '../Const/action-types.js';

const storiesReducer = (state = [], action) => {
	switch(action.type) {
		case SET_STORIES: {
			const updatedState = [...action.payload]
			return  updatedState;
		}
		case SET_STORY: {
			const updatedState = [...state, action.payload]
			return  updatedState;
		}
		case DELETE_STORY: {
			const updatedState = state.filter(item => item._id !== action.payload)
			return  updatedState;
		}
		default:
			return state;
	}
}

export default storiesReducer;