import { 
	LOAD_USERS,
	LOAD_USER,
} from '../Const/action-types.js';

const usersReducer = (state = [], action) => {
	switch(action.type) {
		case LOAD_USERS: {
			const updatedState = [...action.payload]
			return  updatedState;
		} 
		case LOAD_USER: {
			const ids = state.map(item => item._id);

			if (!ids.includes(action.payload._id)) {
				const updatedState = [...state, action.payload]
			return  updatedState;
			}
			break;
		}
		default:
			return state;
	}
}

export default usersReducer;