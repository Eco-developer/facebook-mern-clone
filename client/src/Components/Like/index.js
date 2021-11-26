import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { SentButton } from '../Buttons/index.js';
import { ThumbUpOutlined } from '@material-ui/icons';
import { connect } from 'react-redux';
import { useState } from 'react';
import { likesLength } from '../../services/Selectors/index.js';
import { updateExpandedPost } from '../../actions/index.js';

const mapStateToProps = (state) => (
	{ userId : state.user._id }
);

const mapDispatchToProps = (dispatch) => {
	return {
		handleExpandedPost: (data) => dispatch(updateExpandedPost(data))
	};
};

const LikeBase = ({postId, userId, likes, handleExpandedPost}) => {
	const [likeActive, setLikeActive] = useState(likes.includes(userId));
	const handleSubmit = async () => {
		try {
			setLikeActive(!likes.includes(userId));
			const response = await axios.put(`${FACEBOOK_API}edit/likepost/${postId}-${userId}`);
			handleExpandedPost({likes: response.data})
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<SentButton 
			onClick={handleSubmit}
			active={likeActive ? 'like-active' : ''}
		>
			<ThumbUpOutlined className='text-primary mr-1'/>
			<p className='m-0 p-0 text-primary'>
				{likesLength(likes)}
			</p>
		</SentButton>
	)
}

const Like = connect(
	mapStateToProps,
	mapDispatchToProps
)(LikeBase);

export default Like;