import StoryHeader from '../expanded-story-header/index.js';
import StoryMarker from '../expanded-story-marker/index.js';
import Image from '../Image/index.js';
import {
	LeftControl,
	RightControl
} from '../expanded-story-controls/index.js';
import { CancelOutlined } from '@material-ui/icons';

const ExpandedStoryContainer = ({currentStory, amount, begin, end, storyCurrentIndex, handleRightControl, handleLeftControl, onHandleExpandedStory}) => (
	<div className='bg-dark vh-100 w-100 m-0 p-0 expanded-post'>
		<div className='p-relative d-flex align-items-center justify-content-center vh-100 w-100'>
			<div 
				className='p-absolute cursor-pointer cancel-btn display-max'
				onClick={onHandleExpandedStory}
			>
				<CancelOutlined 
					className='text-white'
				/>
			</div>
			<div className='story-container p-relative'>
				<StoryMarker 
					amount={amount}
					storyCurrentIndex={storyCurrentIndex}
				/>
				<StoryHeader
					userName={currentStory.user_name}
					userAvatar={currentStory.user_avatar}
					timestamp={currentStory.createdAt}
					userId={currentStory.user_id}
					storyId={currentStory._id}
					onHandleExpandedStory={onHandleExpandedStory}
					handleLeftControl={handleLeftControl}
				/>
				{!begin ?
					<LeftControl 
						onClick={handleLeftControl}
					/>
				: null}
				{!end ? 
					<RightControl
						onClick={handleRightControl}
					/>
				: null}
				<Image 
					src={currentStory.story_img} 
					alt="story"
					className='story-image'
				/>
			</div>
		</div>
	</div>
)

export default ExpandedStoryContainer;