import ProfilePosts from '../profile-posts/index.js';
import ProfilePhotosMain from '../profile-photos-main/index.js';
import MyFriendsMain from '../my-friends-main/index.js';
import ProfileInfo from '../profile-info/index.js';
import * as NAV from '../../Const/profile-nav.js';

const ProfilePages = ({currentPage}) => {
	const router = (page) => {
		switch(page) {
			case NAV.PUBLICATIONS:
				return (<ProfilePosts/>);
			case NAV.PHOTOS:
				return (<ProfilePhotosMain/>);
			case NAV.FRIENDS:
				return (<MyFriendsMain/>);
			case NAV.INFO:
				return(<ProfileInfo/>);
			default:
				return (<ProfilePosts/>);
		}
	}

	return (
		<div className='d-flex justify-content-center'>
			{router(currentPage)}
		</div>
	)
}

export default ProfilePages;