import FeedHome from '../../Components/feed-home/index.js';
import FeedChats from '../../Components/feed-chats/index.js';
import FeedPeople from '../../Components/feed-people/index.js';
import FeedVideo from '../../Components/feed-videos/index.js';
import FeedCovidInformationCenter from '../../Components/feed-covid-19/index.js';
import * as FEED from '../../Const/header.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
	{ headerPage: state.header }
)

const FeedBase = ({headerPage}) => {
	const router = (page) => {
		switch(true) {
			case page[FEED.HOME] :
				return (<FeedHome/>);
			case page[FEED.VIDEOS]: 
				return (<FeedVideo/>);
			case page[FEED.COVID_19]:
				return (<FeedCovidInformationCenter/>);
			case page[FEED.CHATS]:
				return (<FeedChats/>);
			case page[FEED.PEOPLE]:
				return (<FeedPeople/>);
			default:
				return (<FeedHome/>);
		}
	}

	return (
		router(headerPage)
	)
}

const Feed = connect(mapStateToProps)(FeedBase);

export default Feed;