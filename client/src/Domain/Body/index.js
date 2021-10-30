import Header from '../../Components/Header/index.js';
import Feed from '../Feed/index.js';
import ProfilePage from '../Profile/index.js';
import ExpandedPost from '../../Components/expanded-post/index.js';
import ExpandedStory from '../../Components/expanded-story/index.js';
import RePost from '../../Components/re-post/index.js';
import ChatMini from '../../Components/chat-mini/index.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../../Components/custom-routes/index.js';
import * as ROUTES from '../../Const/routes.js';

const Body = () => {
	return (
		<>
			<Header/>
			<ExpandedPost/>
			<RePost/>
			<ChatMini/>
			<Switch>
				<Route exact path={ROUTES.FEED_PAGE}>
					<ExpandedStory/>
					<Feed/>
				</Route>
				<PrivateRoute exact path={ROUTES.PROFILE_PAGE}>
					<Feed/>
					<ProfilePage/>
				</PrivateRoute>
				<Redirect to={ROUTES.FEED_PAGE}/>
			</Switch>
		</>
	)
}

export default Body;