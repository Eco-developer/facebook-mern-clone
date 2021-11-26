import Avatar from '../Avatar/index.js';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { AccountCircle, VideoCall } from '@material-ui/icons';

const ChatProfileSide = ({recipientTarget}) => {
	const { push } = useHistory();

	const goToProfile = () => {
		if (recipientTarget) {
			push(recipientTarget.id);
		}
	}

	return (
		<div className='m-0 p-0 chats-side display-max d-flex justify-content-center align-items-center'>

			{recipientTarget &&
			(<div 
				className='d-flex flex-column align-items-center p-3 m-2 rounded-10 bg-grayblue shadow-sm'
			>
				<Avatar 
					src={recipientTarget.src}
					style={{
						height: '8rem',
						width: '8rem'
					}}
					trigger={true}
					uid={recipientTarget.id}
				/>
				<div className='d-flex justify-content-center mt-2 mb-2'>
					<h6 className='m-0 text_black'>
						{recipientTarget.name}
					</h6>
				</div>
				<div className='d-flex justify-content-center'>
					<ExtendedIconButton 
						onClick={goToProfile}
					>
						<AccountCircle 
							className='text-info'/>
					</ExtendedIconButton>
					<ExtendedIconButton>
						<VideoCall className='text-danger'/>
					</ExtendedIconButton>
				</div>
			</div>)
			}
		</div>
	)
}

const ExtendedIconButton = ({label, children, onClick}) => (
	<div className='d-flex flex-column ml-1 mr-1 align-items-center'>
		<IconButton onClick={onClick}>
			{children}
		</IconButton>
	</div>
)

export default ChatProfileSide;