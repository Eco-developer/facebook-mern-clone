import EditProfileObserver from '../edit-profile-observer/index.js';
import Avatar from '../Avatar/index.js';
import EditProfilePicture from '../edit-profile-picture/index.js';
import { ProfileButton } from '../Buttons/index.js';
import { Camera } from '@material-ui/icons';
import { useProfile } from '../../hooks/index.js';
import { useState } from 'react';

const ProfilePicture = () => {
	const { userInfo: { displayPhoto } } = useProfile();
	const [toggleEdit, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggleEdit);
	};

	return (
	  <>
		<div className='profile-avatar'>
			<div className='p-relative'>
				<Avatar 
					style={{
						height: '130px',
						width: '130px',
						border: '2px solid white'
					}}
					src={displayPhoto}
				/>
				<EditProfileObserver>
					<ProfileButton
						Icon={Camera}
						extensions='p-absolute rounded rounded-circle camera'
						onClick={handleToggle}
					/>
				</EditProfileObserver>
			</div>
		</div>
		<EditProfileObserver>
			<EditProfilePicture
				display={toggleEdit}
				handleToggle={handleToggle}
			/>
		</EditProfileObserver>
	  </>
	)
}

export default ProfilePicture;