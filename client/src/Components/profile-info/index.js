import DetailInfo from '../detail-info/index.js';
import { 
	ProfilePagesLoyout, 
	PostLoyout 
} from '../Loyouts/index.js';
import {
	LocationOn,
	MyLocation,
	Phone,
	Email,
	AccountCircle,
} from '@material-ui/icons';
import { useProfile } from '../../hooks/index.js';

const ProfileInfo = () => {
	const { 
		userInfo : {
			displayName,
			state,
			country,
			email,
			phone_number,
		} 
	} = useProfile();
	return (
		<ProfilePagesLoyout extend='plr-0'>
			<PostLoyout
				extend='w-100 border-none'
  				mnres={false}
			>
				<div className='d-flex w-100 pt-1 pb-2'>
					<h5 className='m-0 text_black'>Info</h5>
				</div>
				<div className='d-flex flex-column w-100 pb-1'>
					<div className='pt-1 pb-1'>
						<h6 className='m-0 text_black'>
							Contact info
						</h6>
					</div>
					<DetailInfo
						Icon={AccountCircle}
						text={displayName}
					/>
					<DetailInfo
						Icon={Email}
						text={email}
					/>
					<DetailInfo
						Icon={Phone}
						text={phone_number}
					/>
				</div>
				<div className='d-flex flex-column w-100'>
					<div className='pt-1 pb-1'>
						<h6 className='m-0 text_black'>
							Location
						</h6>
					</div>
					<DetailInfo
						Icon={MyLocation}
						text={`Lives ${state ? state+', ': ''}${country}`}
					/>
					<DetailInfo
						Icon={LocationOn}
						text={`From ${state ? state+', ': ''}${country}`}
					/>
				</div>
			</PostLoyout>
		</ProfilePagesLoyout>
	)	
}

export default ProfileInfo;