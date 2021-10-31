//import Header from '../../Components/Header/index.js';
//import Feed from '../Feed/index.js';

//import ExpandedPost from '../../Components/expanded-post/index.js';
//import ExpandedStory from '../../Components/expanded-story/index.js';
//import RePost from '../../Components/re-post/index.js';
//import ChatMini from '../../Components/chat-mini/index.js';
import { PrivateRoute } from '../../Components/custom-routes/index.js';
import { 
	Switch, 
	Route, 
	Redirect 
} from 'react-router-dom';
import {
	lazy,
} from 'react';
import * as ROUTES from '../../Const/routes.js';

const Header = lazy(() => import('../../Components/Header/index.js'));
const Feed = lazy(() => import('../Feed/index.js'));

const ExpandedPost = lazy(() => import('../../Components/expanded-post/index.js'));
const ExpandedStory = lazy(() => import('../../Components/expanded-story/index.js'));
const RePost = lazy(() => import('../../Components/re-post/index.js'));
const ChatMini = lazy(() => import('../../Components/chat-mini/index.js'));
const ProfilePage = lazy(() => import('../Profile/index.js'));

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
						<ProfilePage/>
					</PrivateRoute>
				<Redirect to={ROUTES.FEED_PAGE}/>
			</Switch>
		</>
	)
}

export default Body;