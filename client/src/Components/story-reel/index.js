import Story from '../Story/index.js';
import UserStory from '../user-story/index.js';
import StoryReelControls from '../story-reel-controls/index.js';
import makeReel from '../../services/make-reel/index.js';
import { useRef } from 'react';
import {v4 as uuid} from 'uuid';
import { connect } from 'react-redux';
import { setExpandedStory } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleExpandedStory: (data) => dispatch(setExpandedStory(data))
	};
};

const mapStateToProps = (state) => (
	{ 
		stories: state.stories, 
	}
)

const StoryReelBase = ({stories, handleExpandedStory}) => {
	const nodeRef = useRef(null);
	const innerRef = useRef(null);
	const storyReel = makeReel(stories);

	const handleClick = (index) => {
		handleExpandedStory({userIndex: index, storyIndex: 0})
	}

	return (
		<div className='p-0 m-0 p-relative w-100'>
			<div 
				className='p-3 pb-4 pt-4 overflow-x w-100 scroll-smooth'
				ref={nodeRef}
			>
				<div 
					className='d-flex fit-content'
					ref={innerRef}
				>
					<UserStory/>
					{storyReel.map((story, index) => (
							<Story 
								key={uuid()}
								bgSrc={story.story_img} 
								avatarSrc={story.user_avatar} 
								name={story.user_name}
								onClick={() => handleClick(index)}
							/>
					))}
				</div>
			</div>
			<StoryReelControls 
				nodeRef={nodeRef}
				innerRef={innerRef}
			/>	
		</div>
	)
}

const StoryReel = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryReelBase);

export default StoryReel;