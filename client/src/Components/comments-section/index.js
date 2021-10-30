import Replies from '../Replies/index.js';
import TimeAgo from 'react-timeago';
import Avatar from '../Avatar/index.js';

const CommentsSection = ({text, timestamp, name, src, replies, handleCommentsId, repliesId}) => {

	const onHandleCommentsId = () => {
		handleCommentsId(repliesId, name);
	};

	return (
		<div className='d-flex align-items-start m-2 flex-grow-1'>
			<Avatar src={src}/>
			<div className='ml-2 d-flex flex-column'>
				<div className='bg-secondary d-flex flex-column p-2 rounded-10 mb-1'>
					<h6 className='m-0 mb-1 text_black'>
						{name}
					</h6>
					<p className='m-0'>{text}</p>
				</div>
				<div className='d-flex pl-2 pr-2 flex-grow-1 align-items-center'>
					<TimeAgo 
						date={timestamp}
						live={true}
						max={Number.MAX_SAFE_INTEGER}
					/>
					<p 
						className='m-0 ml-2  cursor-pointer'
						onClick={onHandleCommentsId}
					>
						Replay
					</p>
				</div>
				{replies &&
				 <Replies 
				 	replies={replies}
				 	handleCommentsId={handleCommentsId}
				 />
				 }
			</div>
		</div>
	)
}

export default CommentsSection;