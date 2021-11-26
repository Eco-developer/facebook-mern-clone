import ReplayTarget from '../replay-target/index.js';
import Form from '../Forms/index.js';
import { Textarea } from '../Input/index.js';
import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { useState } from 'react';
import { SentButton } from '../Buttons/index.js';
import { NearMe } from '@material-ui/icons';
import { connect } from 'react-redux';
import {v4 as uuid} from 'uuid';
import {
	MAKE_COMMENT,
	MAKE_REPLAY
} from '../../Const/notification-types.js';

const mapStateToProps = (state) => (
	{user : state.user}
)

const MakeCommentBoxBase = ({commentsId, setdefaultCommentsId, targetName, user}) => {
	const [commentInput, setCommentInput] = useState('');

	const {
		comments_id, 
		replay_name,
		isComment,
	} = commentsId;

	const {
		displayName,
		_id,
	} = user;


	const onChange = (e) => {
		const {target : { value } } = e;
		setCommentInput(value);
	};

	const onSubmit = async(e) => {
		e.preventDefault();
		if (!commentInput.trim()) {
			return;
		}
		const comment = {
			user_name: displayName,
			user_id: _id,
			text: commentInput,
			comments_id,
			replies_id: isComment ? uuid() : comments_id,
			isComment,
		}

		const notification = {
			type: isComment ?  MAKE_COMMENT : MAKE_REPLAY,
			user_id: _id,
			target: targetName,
		};

		try {
			await axios.post(
				`${FACEBOOK_API}comment`,
				comment,
			)
			await axios.post(
				`${FACEBOOK_API}upload/notification`,
				notification
			)
		} catch (error) {
			console.log(error.message);
		}
		setdefaultCommentsId();
		setCommentInput("");
	};
	return (
		<Form onSubmit={onSubmit}>
			<div className='form-group mt-1 mb-0 d-flex make-comment-box p-relative'>
				{replay_name && 
					<ReplayTarget 
						replayName={replay_name}
						setdefaultCommentsId={setdefaultCommentsId}
					/>
				}
				<Textarea 
					className={`form-control w-100 overflow-y ${replay_name ? 'pl-4' : ''}`}
					value={commentInput}
					onChange={onChange}
				/>			
				
				<SentButton 
					onClick={onSubmit}
				>
					<NearMe className='text-primary'/>
				</SentButton>

			</div>
		</Form>
	)
}


const MakeCommentBox = connect(mapStateToProps)(MakeCommentBoxBase)

export default MakeCommentBox;