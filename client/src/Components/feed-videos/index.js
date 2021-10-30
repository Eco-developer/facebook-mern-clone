import VideosMain from '../videos-main/index.js';
import VideosSide from '../videos-side/index.js';
import FeedPeopleProvider from '../../providers/feed-people-provider.js';
import { FeedLoyout } from '../Loyouts/index.js';

const FeedVideo = () => (
	<FeedPeopleProvider>
		<FeedLoyout>
			<VideosSide/>
			<VideosMain/>
		</FeedLoyout>
	</FeedPeopleProvider>
)

export default FeedVideo;