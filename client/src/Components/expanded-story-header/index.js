import Avatar from '../Avatar/index.js';
import DeleteStory from '../delete-story/index.js';
import TimeAgo from 'react-timeago';
import { Clear } from '@material-ui/icons';

const StoryHeader = ({userName, userAvatar, timestamp, onHandleExpandedStory, userId, storyId, handleLeftControl}) => (
	<div className='story-header d-flex align-items-center justify-content-between p-2 pt-3'>
		<div className='d-flex align-items-center' >
			<Avatar
				src={userAvatar}
			/>	
			<div className='ml-2 d-flex flex-column'>
				<h6 className='m-0 text-white'>
					{userName}
				</h6>
				<TimeAgo 
					className='m-0 text-white font-small'
					date={timestamp}
					live={true}
					max={Number.MAX_SAFE_INTEGER}
				/>
			</div>
		</div>
		<div className='d-flex align-items-center'>
			<DeleteStory
				userId={userId}
				storyId={storyId}
				handleLeftControl={handleLeftControl}
			/>
			<Clear 
				className='display-min ml-2 text-white cursor-pointer'
				onClick={onHandleExpandedStory}
			/>
		</div>
	</div>
)

export default StoryHeader;