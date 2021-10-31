import { 
	UPDATE_USER_DATA, 
	DEFAULT_USER_DATA 
} from '../Const/action-types.js';

const userDataReducer = (state = {}, action) => {
	switch(action.type) {
		case UPDATE_USER_DATA: 
			return  {...state, 
						...action.payload,
					}
		case DEFAULT_USER_DATA: 
			return {}
		default:
			return state;
	}
}

export default userDataReducer;