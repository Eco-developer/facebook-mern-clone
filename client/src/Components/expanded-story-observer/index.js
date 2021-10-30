import ExpandedStoryContainer from '../expanded-story-container/index.js';
import { useState } from 'react';

const ExpandedStoryObserver = ({stories, userIndex, storyIndex, onHandleExpandedStory}) => {
	const [ userCurrentIndex, setUserCurrentIndex ] = useState(userIndex);
	const [ storyCurrentIndex, setStoryCurrentIndex ] = useState(storyIndex);
	const currentStory = stories[userCurrentIndex].user_stories[storyCurrentIndex];
	const amount = stories[userCurrentIndex].user_stories.length;
	const begin = userCurrentIndex === 0 && storyCurrentIndex === 0;
	const end = userCurrentIndex === stories.length - 1 && storyCurrentIndex === stories[userCurrentIndex].user_stories.length - 1;

	const handleLeftControl = () => {
		if (!begin) {
			if (storyCurrentIndex === 0) {
				setUserCurrentIndex((index) => (index - 1));
				const last = stories[userCurrentIndex - 1].user_stories.length;
				setStoryCurrentIndex((index) => (last - 1));
			} else {
				setStoryCurrentIndex((index) => (index - 1));
			}
		}
	}

	const handleRightControl = () => {
		if (!end) {
			if (amount === (storyCurrentIndex + 1)) {
				setUserCurrentIndex((index) => (index + 1));
				setStoryCurrentIndex(0)
			} else {
				setStoryCurrentIndex((index) => (index + 1));
			}
		}
	}
	
	return (
		<ExpandedStoryContainer
			currentStory={currentStory}
			begin={begin}
			end={end}
			amount={amount}
			storyCurrentIndex={storyCurrentIndex}
			handleRightControl={handleRightControl}
			handleLeftControl={handleLeftControl}
			onHandleExpandedStory={onHandleExpandedStory}
		/>
	)	
}

export default ExpandedStoryObserver;