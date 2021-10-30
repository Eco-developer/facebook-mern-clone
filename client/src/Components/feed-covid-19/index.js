import CovidSide from '../covid-side/index.js';
import CovidMain from '../covid-main/index.js';
import FeedPeopleProvider from '../../providers/feed-people-provider.js';
import { FeedLoyout } from '../Loyouts/index.js';

const FeedCovidInformationCenter = () => (
	<FeedPeopleProvider>
		<FeedLoyout>
			<CovidSide/>
			<CovidMain/>
		</FeedLoyout>
	</FeedPeopleProvider>
)

export default FeedCovidInformationCenter;