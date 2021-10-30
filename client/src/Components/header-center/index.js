import HeaderCenterCol from './header-center-col.js';
import {Home, 
 		SubscriptionsOutlined, 
 		LocalHospital, 
 		SupervisedUserCircle,
 		Forum } from '@material-ui/icons';
import * as FEED from '../../Const/header.js';

const HeaderCenter = () => (
	<div className='header_center col-sm-6 p-0 flex-grow-1 d-flex h-fill'>
		<HeaderCenterCol target={FEED.HOME}>
			<Home 
				fontSize='large'
				className='text-primary'
			/>
		</HeaderCenterCol>
		<HeaderCenterCol target={FEED.VIDEOS}>
			<SubscriptionsOutlined 
				fontSize='large'
				className='text-danger'
			/>
		</HeaderCenterCol>
		<HeaderCenterCol target={FEED.CHATS}>
			<Forum 
				fontSize='large'
				className='text-info'
			/>
		</HeaderCenterCol>
		<HeaderCenterCol target={FEED.COVID_19}>
			<LocalHospital 
				fontSize='large'
				className='text-success'
			/>
		</HeaderCenterCol>
		<HeaderCenterCol target={FEED.PEOPLE}>
			<SupervisedUserCircle 
				fontSize='large'
				className='text-orange'
			/>
		</HeaderCenterCol>				
	</div>
)

export default HeaderCenter;