import CommentsSection from '../comments-section/index.js';
import {v4 as uuid} from 'uuid';
import { sortByTimestamp } from '../../services/Selectors/index.js';

const CommentsSectionContainer = ({allComments, isCommentGroup, nodeRef, handleCommentsId}) => {
	return (
		<div 
			className={`d-flex flex-grow-1 h-0 transition-4s-eio overflow-y ${isCommentGroup ? 'mh-5 rounded-10 border border-white' : ''}`}
		>
			<div 
				className='d-flex flex-column flex-grow-1 p-1 height-fit replies-target'
				ref={nodeRef}
			>
				{allComments.length ?
				sortByTimestamp(allComments).reverse().map((comment) => (
					<CommentsSection
						key={uuid()}
						handleCommentsId={handleCommentsId}
						repliesId={comment.replies_id}
						text={comment.text}
						timestamp={comment.createdAt}
						name={comment.user_name}
						src={comment.user_avatar}
						replies={comment.replies?.allComments?.length ? comment.replies : false}
					/>
				))
				: null}
			</div>
		</div>
	)
}

export default CommentsSectionContainer;