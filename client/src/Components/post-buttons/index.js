import Like from '../Like/index.js';
import { SentButton } from '../Buttons/index.js';
import { 
	ChatBubbleOutlineOutlined, 
	ReplyOutlined
} from '@material-ui/icons';
import { commentsLength } from '../../services/Selectors/index.js';

const PostButtons = ({comments, onSetComments, onHandleRePost, postId, likes}) => (
	<div className='d-flex pt-2 pb-2'>
		<Like 
			postId={postId}
			likes={likes}
		/>
		<SentButton
			margin='mr-3 ml-3 text-primary'
			onClick={onSetComments}
		>
			<ChatBubbleOutlineOutlined className='text-primary mr-1'/>
			{comments && commentsLength(comments)}
		</SentButton>
		<SentButton
			onClick={onHandleRePost}
		>
			<ReplyOutlined className='text-primary rotate-left'/>
		</SentButton>
	</div>
)

export default PostButtons;