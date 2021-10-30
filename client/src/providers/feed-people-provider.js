import FeedPeopleContext from '../context/feed-people-context.js';
import {
	filterReducer,
	searchReducer,
} from '../reducers/index.js';
import { useReducer } from 'react';
import { useCombinedReducers } from '../hooks/index.js';

const FeedPeopleProvider = ({children}) => {
	const store = useCombinedReducers(
			{filter: useReducer(
				filterReducer.reducer, 
				filterReducer.initialState
			), search: useReducer(
				searchReducer.reducer,
				searchReducer.initialState
			)}
		);

	return (
		<FeedPeopleContext.Provider value={store}>
			{children}
		</FeedPeopleContext.Provider>
	)
}




export default FeedPeopleProvider;