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
	const [success, setSuccess] = useState(false);
	const [failure, setFailure] = useState(false);
	const [ processing, setProcessing ] = useState(false);

	const onChangeText = (e) => {
		const { target: { value } } = e;
		setText(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (processing) { return }
		setProcessing(true);
		try {
			const response = await axios.put(
				`${FACEBOOK_API}edit/post/${data.postId}`,
				{ newDescription: text }
			);
			handleExpandedPost({description: response.data})
			setSuccess(true);
		} catch (err) {
			setFailure(true);
		}
		setTimeout(()=>{
			onClose();
		}, 1600);
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
			success={success}
			failure={failure}
			processing={processing}
			sentMessages={true}
		/>
	)
}

const EditPost = connect(
	null,
	mapDispatchToProps
)(EditPostBase)

export default EditPost;