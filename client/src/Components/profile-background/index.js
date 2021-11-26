import BackgroundImage from '../background-image/index.js';
import ProfilePicture from '../profile-picture/index.js';
import ProfileNav from '../profile-nav/index.js';
import { useProfile } from '../../hooks/index.js';

const ProfileBackground = ({ setProfilePage }) => {
	const { userInfo: { displayName } } = useProfile();
	return (
		<div className='d-flex justify-content-center bg-gray-gradient vh-70'>
			<div className='flex-grow-1 maxw-900 d-flex flex-column'>
				<div className='p-relative background-image-container'>
					<BackgroundImage/>
					<ProfilePicture/>
				</div>
				<div className='flex-grow-1 d-flex justify-content-center align-items-center pt-2 pb-2'>
					<h3 className='m-0 text_black'>{displayName}</h3>
				</div>
				<div className='flex-grow-1 d-flex justify-content-center'>
						<div className='flex-grow-1 d-flex justify-content-center height-fit align-items-center maxw-800  border-top'>
						<ProfileNav setProfilePage={setProfilePage}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileBackground;