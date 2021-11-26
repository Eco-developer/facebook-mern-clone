import Avatar from '../Avatar/index.js';
import {
	Clear,
	ArrowDropDown,
} from '@material-ui/icons';

const ChatMiniHeader = ({recipientTarget, onHandleRecipientTarget, handleToggle}) => (
	<div className='chat-mini-header d-flex p-2 bg-white w-100 align-items-center'>
		<div className='d-flex flex-grow-1 align-items-center'>
			<Avatar
				trigger={true}
				src={recipientTarget.src}
				uid={recipientTarget.id}
				style={{
					width: '30px',
    				height: '30px',
				}}
			/>
			<p className='m-0 ml-1'>
				{recipientTarget.name}
			</p>
		</div>
		<div className='d-flex'>
			<ArrowDropDown 
				className='cursor-pointer text-primary'
				onClick={handleToggle}
			/>
			<Clear 
				className='cursor-pointer text-primary'
				onClick={onHandleRecipientTarget}
			/>
		</div>
	</div>
)

export default ChatMiniHeader;