import RePostContainer from '../re-post-container/index.js';
import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import { REPOST } from '../../Const/notification-types.js';

const RePostObserver = ({data, user, onHandleRePost}) => {
	const [text, setText] = useState('');
	const [success, setSuccess] = useState(false);
	const [failure, setFailure] = useState(false);

	const {
		postUrl,
		name, 
	} = data;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const postData = {
			user_name: user.displayName,
			user_id: user._id,
			user_avatar: user.displayPhoto,
			post_image: postUrl,
			description: text,
			comments_id: uuid(),
			location: '',
		};

		const notification = {
			type: REPOST,
			user_id: user._id,
			target: name,
		};

		try {
			await axios.post(
				`${FACEBOOK_API}upload/post`,
				postData
			);	
			await axios.post(
				`${FACEBOOK_API}upload/notification`,
				notification
			)
			setSuccess(true);
		} catch (err) {
			setFailure(true);
		}
		setTimeout(()=>{
			onHandleRePost();
		}, 1520);	
	};

	const onChangeText = (e) => {
		const { target: { value } } = e;
		setText(value);
	}

	return (
		<RePostContainer
			user={user}
			postUrl={postUrl}
			text={text}
			success={success}
			failure={failure}
			onHandleRePost={onHandleRePost}
			onChangeText={onChangeText}
			handleSubmit={handleSubmit}	
			sentMessages={true}
			headerTitle='Write Post'
			button='Post'
		/>
	)
}

export default RePostObserver;