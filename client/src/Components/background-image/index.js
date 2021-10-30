import EditProfileObserver from '../edit-profile-observer/index.js';
import EditProfileBackgroundPicture from '../edit-profile-background-picture/index.js';
import Image from '../Image/index.js';
import { ProfileButton } from '../Buttons/index.js';
import { PhotoCamera } from '@material-ui/icons';
import { useProfile } from '../../hooks/index.js';
import { useState } from 'react';
import defaultBackrgoundPicture from '../../Images/wp4924004.jpg';

const BackgroundImage = () => {
	const { userInfo : { profile_background_picture } } = useProfile();
	const [toggleEdit, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggleEdit);
	};
	return (
		<>
			<div
				className='background-image justify-content-end align-items-end p-4'
			>
				<Image
					src={profile_background_picture}
					defaultImage={defaultBackrgoundPicture}
				/>
				<EditProfileObserver>
					<ProfileButton
						onClick={handleToggle}
						Icon={PhotoCamera}
						text={'Edit Picture'}
						displayMax={true}
					/>
				</EditProfileObserver>
			</div>
			<EditProfileObserver>
				<EditProfileBackgroundPicture
					display={toggleEdit}
					handleToggle={handleToggle}
				/>
			</EditProfileObserver>
		</>
	)
}
//style={{backgroundImage: `url(${profileBackrgoundPicture || defaultBackrgoundPicture})`}}
export default BackgroundImage;