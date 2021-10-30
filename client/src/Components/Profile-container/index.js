import ProfilePages from '../profile-pages/index.js';
import ProfileBackground from '../profile-background/index.js';
import {useState} from 'react';

const ProfileContainer = () => {
	const [currentPage, setProfilePage] = useState('publications');
	return (
		<div className='base-loyout m-0 p-0 overflow-y'>
			<div className='d-flex flex-column w-100 height-fit'>
				<ProfileBackground
					setProfilePage={setProfilePage}
				/>
				<ProfilePages currentPage={currentPage}/>
			</div>
		</div>
	)
}

export default ProfileContainer;