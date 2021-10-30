import Avatar from '../Avatar/index.js';
import TimeAgo from 'react-timeago';
import {
	handleDescription,
	handleIcon
} from '../../services/handle-notification/index.js';

const Notification = ({user={}, type='', target='', timestamp}) => (
	<div className='notification d-flex align-items-center'>
		<div className='p-relative'>
			<Avatar
				src={user.user_avatar}
			/>
			{handleIcon(type)}
		</div>
		<div className='d-flex ml-2 flex-column'>
			<div>
				<p className='m-0 text_black'>
					{handleDescription(type, user.user_name, target)}
				</p>
			</div>
			<div className='w-100'>
				<TimeAgo 
					className='m-0 text-secondary'
					date={timestamp}
					live={true}
					max={Number.MAX_SAFE_INTEGER}
				/>
			</div>
			
		</div>
	</div>
)

export default Notification;