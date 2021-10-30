import ProfileNavOptions from './profile-nav-options.js';
import { useState } from 'react';
import * as NAV from '../../Const/profile-nav.js';

const ProfileNav = ({setProfilePage}) => {
	const [active, setActive] = useState({publications: true});

	const onClick = (e, target) => {
		const arr = Object.keys(active);
		const obj = {};
		
		arr.forEach((item) => {
			obj[item] = false;
		});
		setActive({ ...obj, [target] : true });
		setProfilePage(target)
	}
	return (
		<div className='profile-nav d-flex flex-grow-1'>
			<ProfileNavOptions
				target={NAV.PUBLICATIONS}
				active={active?.publications}
				onClick={onClick}
				text='Publications'
			/>
			<ProfileNavOptions
				target={NAV.INFO}
				active={active?.info}
				onClick={onClick}
				text='Info'
			/>
			<ProfileNavOptions
				target={NAV.FRIENDS}
				active={active?.friends}
				onClick={onClick}
				text='Friends'
			/>
			<ProfileNavOptions
				target={NAV.PHOTOS}
				active={active?.photos}
				onClick={onClick}
				text='Photos'
			/>
		</div>
	)
}

export default ProfileNav;