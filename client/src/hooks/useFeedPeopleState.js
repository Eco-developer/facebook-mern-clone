import { useContext } from 'react';
import FeedPeopleContext from '../context/feed-people-context.js';

const useFeedPeopleState = () => (
	useContext(FeedPeopleContext)
)

export default useFeedPeopleState;