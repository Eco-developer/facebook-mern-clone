import TimeAgo from 'react-timeago';
import Avatar from '../Avatar/index.js';
import PostSettings from '../post-settings/index.js';
import { IconButton } from '@material-ui/core';
import {
 MoreHoriz, 
 Public, 
} from '@material-ui/icons';
import { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
	{ currentUserId: state.user._id }
);

const PostHeaderBase = ({src, name, userId, timestamp, data, currentUserId}) => {
	const [showFlag, setShow] = useState(false);
	const isCurrentUser = userId === currentUserId;

  	const showMenu = (e) => {
      	setShow(!showFlag);
  	};

	return (
		<div className='d-flex align-items-center mb-2 flex-grow-1 p-relative'>
			<Avatar 
				src={src}
				uid={userId}
				trigger={true}
			/>
			<div className='d-flex flex-column flex-grow-1 pr-2 pl-2'>
				<h6 className='m-0 text_black'>
					{name}
				</h6>
				<div className='d-flex align-items-center'>
					<TimeAgo 
						className='m-0 text-secondary mr-2'
						date={timestamp}
						live={true}
						max={Number.MAX_SAFE_INTEGER}
					/>
					<Public className='text-secondary'/>
				</div>
			</div>
			 {isCurrentUser ?
			 	<IconButton onClick={showMenu}>
					<MoreHoriz/>
				</IconButton>
			: null}
			{isCurrentUser ? (showFlag && 
				<PostSettings 
					data={data}
				/>) : null
			}
		</div>
	)
}
 
const PostHeader = connect(mapStateToProps)(PostHeaderBase);

export default PostHeader;