import ExpandedStoryObserver from '../expanded-story-observer/index.js';
import modifyDS from '../../services/modify-DS/index.js';
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
		storyIndexes: state.storyIndexes
	}
)

const ExpandedStoryBase = ({storyIndexes, stories, handleExpandedStory}) => {
	const modified = modifyDS(stories);
	const onHandleExpandedStory = () => {
		handleExpandedStory(null);
	};
	return (
		(modified.length && storyIndexes) ?
			<ExpandedStoryObserver
				stories={modified}
				userIndex={storyIndexes.userIndex} 
				storyIndex={storyIndexes.storyIndex}
				onHandleExpandedStory={onHandleExpandedStory}
			/>
		:null
	)
}

const ExpandedStory = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ExpandedStoryBase)

export default ExpandedStory;