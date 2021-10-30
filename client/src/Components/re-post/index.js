import RePostObserver from '../re-post-observer/index.js'
import { connect } from 'react-redux';
import { setRePost } from '../../actions/index.js';

const mapStateToProps = (state) => (
	{
		data: state.rePost, 
		user: state.user
	}
)

const mapDispatchToProps = (dispatch) => {
	return {
		handleRePost : (data) => dispatch(setRePost(data)),
	};
};

const RePostBase = ({data, user, handleRePost}) => {
	const onHandleRePost = () => {
		handleRePost(null)
	}

	return (
		data ? 
			<RePostObserver
				data={data}
				user={user}
				onHandleRePost={onHandleRePost}
			/>
		: null
	)
}

const RePost = connect(
	mapStateToProps, 
	mapDispatchToProps
)(RePostBase);

export default RePost;