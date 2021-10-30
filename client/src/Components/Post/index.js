import PostHeader from '../post-header/index.js';
import PostImage from '../post-image/index.js';
import PostButtons from '../post-buttons/index.js';
import Comments from '../Comments/index.js';
import MakeCommentBox from '../make-comment/index.js';
import {  PostLoyout } from '../Loyouts/index.js';
import { 
	useRef,
	useState
} from 'react';
import { connect } from 'react-redux';
import { 
	setExpandedPost,
	setRePost,
} from '../../actions/index.js';
import setStyles from '../../services/setStyles/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleExpandedPost: (data) => dispatch(setExpandedPost(data)),
		handleRePost: (data) => dispatch(setRePost(data))
	};
};

const PostBase = ({postId, name, timestamp, postUrl, avatarSrc, likes, description, comments, userId, comments_id, handleExpandedPost, handleRePost}) => {
	const heightRef = useRef();
	const [displayComments, setDisplay] = useState(false);
	const initialState = {comments_id, replay_name: null, isComment: true}
	const [commentsId, setCommentsId] = useState(initialState);

	const data = {
		postId,
		name, 
		timestamp, 
		postUrl, 
		avatarSrc, 
		description, 
		comments,
		userId, 
		comments_id,
		likes,
	};

	const onSetComments = () => {
		const target = heightRef?.current?.getBoundingClientRect();
		if (target) {
			const { height } = target;
			const { parentElement } = heightRef.current;

			const defaultStyles = {
				height: '0',
    			'border-color': 'white',
			}

			const upDatedStyles = {
				height: `${height}px`,
	    		'border-color': '#007bff',
			}

			if (displayComments) {
				setStyles(
					parentElement, 
					displayComments,
					defaultStyles,
					upDatedStyles
				)
				setDisplay(false);
				return;
			} else {
				setStyles(
					parentElement, 
					displayComments,
					defaultStyles,
					upDatedStyles
				)
				setDisplay(true);
				return;
			}
		}
	};

	const onHandleExpandedPost = () => {
		handleExpandedPost(data);
	};

	const onHandleRePost = () => {
		if (postUrl) {
			handleRePost({postUrl, name});
		}
	}

	const handleCommentsId = (id, name) => {
		onSetComments();
		setCommentsId({comments_id: id, replay_name: name, isComment: false});
	};

	const setdefaultCommentsId = () => {
		setCommentsId(initialState);
	};

	return (
		<PostLoyout> 
			<PostHeader 
				src={avatarSrc}
				name={name}
				userId={userId}
				timestamp={timestamp}
				data={data}
			/>
			<div className='mb-2'>
				<p className='m-0'>{description}</p>
			</div>
			{postUrl ? 
				<PostImage 
					extend='mn-3 cursor-pointer'
					imgClassNames='post-image'
					src={postUrl}
					onClick={onHandleExpandedPost}
				/>: null}
			<PostButtons
				comments={comments}
				onSetComments={onSetComments}
				onHandleRePost={onHandleRePost}
				postId={postId}
				likes={likes}
			/>
			<Comments
				comments={comments}
				nodeRef={heightRef}
				handleCommentsId={handleCommentsId}
			/>
			<MakeCommentBox
				commentsId={commentsId}
				setdefaultCommentsId={setdefaultCommentsId}
				targetName={name}
			/>
		</PostLoyout>
	)
}

const Post = connect(
	null, 
	mapDispatchToProps
)(PostBase);

export default Post;