import DetailInfo from '../detail-info/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import {
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
		</PostLoyout>
	)
}
	
export default ProfileDetails;