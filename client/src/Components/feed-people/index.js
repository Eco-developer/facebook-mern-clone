import PeopleMain from '../people-main/index.js';
import PeopleSide from '../people-side/index.js';
import { FeedLoyout } from '../Loyouts/index.js';
import FeedPeopleProvider from '../../providers/feed-people-provider.js';

const FeedPeople = () => {
	return (
		<FeedLoyout>
			<FeedPeopleProvider>
				<PeopleSide/>
				<PeopleMain/>
			</FeedPeopleProvider>
		</FeedLoyout>
	)
}

export default FeedPeople;