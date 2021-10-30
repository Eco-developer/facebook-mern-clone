import PeopleSearchBar from '../people-search-bar/index.js';
import PeopleFilterBar from '../people-filter-bar/index.js';
import FeedSide from '../feed-side/index.js';

const PeopleSide = () => (
	<FeedSide>
		<PeopleSearchBar/>
		<PeopleFilterBar/>
	</FeedSide>		
)
export default PeopleSide;