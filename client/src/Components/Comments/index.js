import CommentsSectionContainer from '../comments-section-container/index.js';

const Comments = ({comments, nodeRef, handleCommentsId}) => {
	return (
		<div className={`d-flex ${comments?.isCommentGroup ? '': 'mnres-2'}`}>
			{comments?.allComments?.length ? 
				<CommentsSectionContainer
					allComments={comments?.allComments}
					isCommentGroup={comments?.isCommentGroup}
					nodeRef={nodeRef}
					handleCommentsId={handleCommentsId}
				/>
				: null
			}
		</div>
	)
}

export default Comments;