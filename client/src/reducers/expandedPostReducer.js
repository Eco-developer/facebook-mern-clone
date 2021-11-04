import { 
	SET_EXPANDED_POST,
	UPDATE_EXPANDED_POST,
	UPDATE_EXPANDED_POST_COMMENTS,
} from '../Const/action-types.js';

const expandedPostReducer = (state = null, action) => {
	switch(action.type) {
		case SET_EXPANDED_POST: 
			return action.payload;
		case UPDATE_EXPANDED_POST: {
			if (state) {
				return {...state, ...action.payload}
			}
			return state
		}
		case UPDATE_EXPANDED_POST_COMMENTS: {
			if (state) {
				if (action.payload.isComment) {
					if (state.comments_id === action.payload.comments_id) {
						const comments = state.comments.allComments ?
						{
							...state.comments, 
							allComments: [action.payload, ...state.comments.allComments]
						} : { 
							comments_id: action.payload.comments_id,
							allComments: [action.payload],
							isCommentGroup: true,
						};

						const updatedState = {
							...state, 
							comments,
						};
						return updatedState;
					}
				} else {
					const repliesIds = state.comments.allComments.map(item => item.replies_id);

					if (repliesIds.includes(action.payload.comments_id)) {
						const updatedComments = state.comments.allComments.map(item => {
							if (item.replies_id !== action.payload.comments_id) {
								return item;
							}
							const replies = item.replies?.allComments ?
							{
								...item.replies,
								allComments: [action.payload, ...item.replies.allComments]
							} :
							{
								comments_id: action.payload.comments_id,
								allComments: [action.payload],
								isCommentGroup: false,
							};
							const updated = {
								...item, 
								replies,
							}
							return updated;
						})
						const updatedState = {
							...state, 
							comments: {
								...state.comments, allComments: updatedComments
							}
						};
						return updatedState;
					}
				}
			}
			return state;
		}
		default:
			return state;
	}
}

export default expandedPostReducer;