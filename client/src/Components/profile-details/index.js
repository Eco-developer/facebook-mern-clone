import DetailInfo from '../detail-info/index.js';
import EditProfileObserver from '../edit-profile-observer/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import { ProfileButton } from '../Buttons/index.js';
import {
	Edit,
	LocationOn,
	MyLocation,
	More,
} from '@material-ui/icons';
import { useProfile } from '../../hooks/index.js';

const ProfileDetails = () => {
	const { 
		userInfo : {
			state,
			country,
		} 
	} = useProfile();
	return (
		<PostLoyout>
			<DetailInfo
				Icon={MyLocation}
				text={`Lives ${state ? state+', ': ''}${country}`}
			/>
			<DetailInfo
				Icon={LocationOn}
				text={`From ${state ? state+', ': ''}${country}`}
			/>
			<DetailInfo
				Icon={More}
				text='See more about me'
			/>
			<EditProfileObserver>
				<ProfileButton
					Icon={Edit}
					text='Edit your details'
					extensions='mt-2 mb-2'
				/>
			</EditProfileObserver>
		</PostLoyout>
	)
}
	
export default ProfileDetails;