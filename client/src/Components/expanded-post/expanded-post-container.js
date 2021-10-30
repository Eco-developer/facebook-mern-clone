import PostHeader from '../post-header/index.js';
import PostImage from '../post-image/index.js';
import PostButtons from '../post-buttons/index.js';
import Comments from '../Comments/index.js';
import MakeCommentBox from '../make-comment/index.js';
import { CancelOutlined } from '@material-ui/icons';

const ExpandedPostContainer = ({data, commentsId, setdefaultCommentsId, onSetComments, handleCommentsId, onHandleExpandedPost, onHandleRePost, nodeRef}) => (
	<div className='vh-100 w-100 m-0 p-0 expanded-post'>
		<div className='vh-100 w-100 p-relative d-flex overflow-y'>
			<div 
				className='p-absolute cursor-pointer cancel-btn'
				onClick={onHandleExpandedPost}
			>
				<CancelOutlined 
					className='text-white'
				/>
			</div>
			<PostImage
				extend='align-items-center expanded-left'
				imgClassNames='expanded-image'
				src={data?.postUrl}
			/>
			<div className='d-flex flex-column bg-white p-4 pt-3 pb-3 expanded-right'>
				<PostHeader 
					src={data?.avatarSrc}
					name={data?.name}
					timestamp={data?.timestamp}
					data={data}
					userId={data?.userId}
				/>
				<div className='d-flex flex-column flex-grow-10'>
					<div className='mb-1'>
						<p className='text_black m-0'>
							{data?.description}
						</p>
					</div>
					<PostButtons
						comments={data?.comments}
						onSetComments={onSetComments}
						onHandleRePost={onHandleRePost}
						likes={data?.likes}
						postId={data.postId}
					/>
					<Comments
						comments={data?.comments}
						nodeRef={nodeRef}
						handleCommentsId={handleCommentsId}
					/>
					<MakeCommentBox
						commentsId={commentsId}
						setdefaultCommentsId={setdefaultCommentsId}
						targetName={data?.name}
					/>
				</div>						
			</div>
		</div>
	</div>
)

export default ExpandedPostContainer;