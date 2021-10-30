import RePostContainer from '../re-post-container/index.js';
import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { useState } from 'react';
import { connect } from 'react-redux';
import { updateExpandedPost } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleExpandedPost: (data) => dispatch(updateExpandedPost(data))
	};
};

const EditPostBase = ({data, onClose, handleExpandedPost}) => {
	const [text, setText] = useState(data.description);
	const onChangeText = (e) => {
		const { target: { value } } = e;
		setText(value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				`${FACEBOOK_API}edit/post/${data.postId}`,
				{ newDescription: text }
			);
			handleExpandedPost({description: response.data})
			onClose();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<RePostContainer
			postUrl={data.postUrl}
			text={text}
			onHandleRePost={onClose}
			onChangeText={onChangeText}
			handleSubmit={handleSubmit}	
			headerTitle='Edit Post'
			button='Edit'
		/>
	)
}

const EditPost = connect(
	null,
	mapDispatchToProps
)(EditPostBase)

export default EditPost;