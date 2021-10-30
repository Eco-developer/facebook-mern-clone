import ExpandedPostObserver from './expanded-post-observer.js';
import { connect } from 'react-redux';
import { 
	setExpandedPost,
	setRePost,
} from '../../actions/index.js';

const mapStateToProps = (state) => (
	{ data: state.expandedPost }
)

const mapDispatchToProps = (dispatch) => {
	return {
		handleExpandedPost: (data) => dispatch(setExpandedPost(data)),
		handleRePost: (data) => dispatch(setRePost(data))
	};
};

const ExpandedPostBase = ({data, handleExpandedPost, handleRePost}) => {
	const onHandleExpandedPost = () => {
		handleExpandedPost(null)
	}

	return (
		data ? 
			<ExpandedPostObserver
				data={data}
				onHandleExpandedPost={onHandleExpandedPost}
				handleRePost={handleRePost}
			/>
		: null
	)
}

const ExpandedPost = connect(
	mapStateToProps, 
	mapDispatchToProps
)(ExpandedPostBase);

export default ExpandedPost;