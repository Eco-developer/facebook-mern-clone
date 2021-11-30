import ProfileContainer from '../../Components/Profile-container/index.js';
import ProfileProvider from '../../providers/profile-provider.js';
import Loading from '../../Components/Loading/index.js';
import axios from 'axios';
import Pusher from 'pusher-js';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { 
	useEffect,
	useState,
} from 'react';
import { connect } from 'react-redux';
import { 
	useParams,
	Redirect
} from 'react-router-dom';
import { 
	getFriends,
	mapPostsToPhotos,
	sortByTimestamp,
 } from '../../services/Selectors/index.js';
import { 
	setDefaultHeader,
	setLoadingProfile,
} from '../../actions/index.js';
import { FEED_PAGE } from '../../Const/routes.js';
import { 
	UPDATE_USER_PROFILE,
} from '../../Const/action-types.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleHeader: () => dispatch(setDefaultHeader()),
		handleLoading: (status) => dispatch(setLoadingProfile(status)),
	};
};

const mapStateToProps = (state) => (
	{ 
		uId: state.user._id, 
		users: state.users,
		posts: state.posts,
		comments: state.comments,
		profileLoading: state.profileLoading,
	}
)

const ProfilePageBase = ({uId, handleHeader, handleLoading, users, posts, comments, profileLoading}) => {
	const { userid } = useParams();
	const [userInfo, setUserInfo] = useState(null);
	const isCurrentAuthUser = uId === userid;

	const checkValidRoute = () => (
		uId === userid || users.map(user => user._id).includes(userid)
	)
	const fetchUserData = async () => {
		try {
			const userResponse =  await axios.get(`${FACEBOOK_API}user/${userid}`);		
			const { data: userResponseData } = userResponse;
			const { photos: rawPhotos } = userResponseData;
			const onSortedPhotos = mapPostsToPhotos(
				rawPhotos, 
				posts, 
				comments
			)

			const photos = sortByTimestamp(onSortedPhotos);

			setUserInfo({...userResponseData, photos });
			handleLoading(false);
		} catch (error){
			console.error(error)
		}
	};

	useEffect(() => {
		if (checkValidRoute()) {
			handleHeader();
			fetchUserData();
		}
	}, [userid, posts, comments])

	useEffect(() => {
		const pusher = new Pusher(
			process.env.REACT_APP_PUSHER_KEY, 
			{ cluster: 'us2' }
		);

		const channel = pusher.subscribe("facebook-channel");
    	channel.bind("trigger", (data) => {
    		console.log(data)
    		if (data.type === UPDATE_USER_PROFILE) {
    			fetchUserData();
    		}
   		})
   		return () => {
   			channel.unbind_all();
   			channel.unsubscribe();
   		}
	})

	if (!checkValidRoute()) {
		return (<Redirect to={FEED_PAGE}/>)
	};
	const friends = getFriends(users, userid);
	return (
		userInfo && !profileLoading ?
		<ProfileProvider value={{isCurrentAuthUser, userInfo, friends}}>
			<ProfileContainer/>
		</ProfileProvider> :
		<Loading/>
	)
}

const ProfilePage = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilePageBase);

export default ProfilePage;