import { 
	SET_NOTIFICATIONS,
	SET_NOTIFICATION,
} from '../Const/action-types.js';

const notificationsReducer = (state = [], action) => {
	switch(action.type) {
		case SET_NOTIFICATIONS: {
			const updatedState = [...action.payload]
			return  updatedState;
		}
		case SET_NOTIFICATION: {
			const updatedState = [action.payload, ...state]
			return  updatedState;
		}
		default:
			return state;
	}
}

export default notificationsReducer;