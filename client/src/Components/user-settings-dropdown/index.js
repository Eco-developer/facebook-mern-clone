import UserSetting from '../user-setting/index.js';
import Logout from '../logout/index.js';
import SettingOption from '../setting-option/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import { BackButtonLg } from '../Buttons/index.js';
import {
	AccessibilityNew,
	Settings,
	Help,
} from '@material-ui/icons';

const UserSettingsDropDown = ({open, handleDropDown}) => {
	return (
		<PostLoyout 
			extend={`rounded setting-dropdown overflow-y overflow-x-hidden transition-4s-eio ${open ? 'open-dropdown' : ''}`}
			mnres={false}
		>
			<BackButtonLg
				onClick={handleDropDown}
				extend='p-3 pb-2 mb-1'
			/>
			<div className='height-fit d-flex flex-column flex-grow-1 p-2'>
				<UserSetting/>
				<SettingOption
					Icon={Settings}
					iconClass='text-warning'
					section='Settings and Privacy'
				/>
				<SettingOption
					Icon={Help}
					iconClass='text-info'
					section='Help and Support'
				/>
				<SettingOption
					Icon={AccessibilityNew}
					iconClass='text-success'
					section='Display and Accessibility'
				/>
				<Logout/>
			</div>
		</PostLoyout>
	)
}

export default UserSettingsDropDown;