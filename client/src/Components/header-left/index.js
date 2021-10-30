import Image from '../Image/index.js';
import Avatar from '../Avatar/index.js';
import logo from '../../Images/1280px-Facebook_Logo_(2019).svg.png';
import { IconButton } from '@material-ui/core';
import { 
	NotificationsActive,
 	Menu
 } from '@material-ui/icons';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
	{ user: state.user }
)

const HeaderLeftBase = ({ handleDropDown, handleOpenNotifications, user}) => (
	<div 
		className='header_left col-sm-3 pl-2 pr-2 d-flex align-items-center h-fill'
	>
		<Avatar
			trigger={true}
			src={user.displayPhoto}
			uid={user._id}
			className='cursor-pointer mr-2'
		/>
		<div className='flex-grow-1 p-relative h-2'>
			<Image 
				className='header_logo display-min'
				defaultImage={logo}
			/>
		</div>
		<IconButton 
			onClick={handleOpenNotifications}
			className='display-min ml-2'
		>
			<NotificationsActive 
				className='text_black'
			/>
		</IconButton>
		<IconButton 
			className='display-min'
			onClick={handleDropDown}
		>
			<Menu className='text_black'/>
		</IconButton>	
	</div>
)

const HeaderLeft = connect(mapStateToProps)(HeaderLeftBase);

export default HeaderLeft;