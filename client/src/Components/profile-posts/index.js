import Posts from '../Posts/index.js';
import WriteSomething from '../write-something/index.js';
import ProfileDetails from '../profile-details/index.js';
import ProfilePhotosSide from '../profile-photos-side/index.js';
import MyFriendsSide from '../my-friends-side/index.js';
import EditProfileObserver from '../edit-profile-observer/index.js';
import { ProfilePagesLoyout } from '../Loyouts/index.js';
import { useParams } from 'react-router-dom';

const ProfilePosts = () => {
	const { userid } = useParams();
	return (
		<ProfilePagesLoyout extend='profile-posts'>
			<div className='d-flex flex-column p-1 col-sm-5'>
				<ProfileDetails/>
				<ProfilePhotosSide/>
				<MyFriendsSide/>
			</div>
			<div className='d-flex flex-column p-1 col-sm-7'>
				<EditProfileObserver>
					<WriteSomething/>
				</EditProfileObserver>
				<Posts userFilter={userid}/>
			</div>
		</ProfilePagesLoyout>
	)
}

export default ProfilePosts;