import HeaderLeft from '../header-left/index.js';
import HeaderCenter  from '../header-center/index.js';
import HeaderRight from '../header-right/index.js';
import UserSettingsDropDown from '../user-settings-dropdown/index.js';
import Notifications from '../Notifications/index.js';
import { useState } from 'react';

const Header = () => {
	const [openDropDown, setOpen] = useState(false);
	const [openNotifications, setOpenNotifications] = useState(false);

	const handleDropDown = () => {
		setOpen(!openDropDown)
		if (!openDropDown) {
			setOpenNotifications(false);
		}
	}

	const handleOpenNotifications = () => {
		setOpenNotifications(!openNotifications);
		if (!openNotifications) {
			setOpen(false);
		}
	}

	return (
		<>
			<div className='navbar header row p-0 m-0'>
				<HeaderLeft	
					handleDropDown={handleDropDown}
					handleOpenNotifications={handleOpenNotifications}
				/>
				<HeaderCenter/>
				<HeaderRight
					handleDropDown={handleDropDown}
					handleOpenNotifications={handleOpenNotifications}
				/>
			</div>
			<UserSettingsDropDown 
				open={openDropDown}
				handleDropDown={handleDropDown}
			/>
			<Notifications
				open={openNotifications}
				handleOpenNotifications={handleOpenNotifications}
			/>
		</>
	)
}

export default Header;