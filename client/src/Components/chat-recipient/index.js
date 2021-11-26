import Avatar from '../Avatar/index.js';

const ChatRecipient = ({src, name, status, id, setRecipientTarget, recipientTarget}) => {
	
	const onClick = (e) => {
		if (window.innerWidth <= 575) {
			const chatMain = document.querySelector('.chats-main');
			chatMain.style.setProperty('transform', 'translate(0)');
		}
		const recipientTarget = {
			src,
			name,
			id,
		};
		setRecipientTarget(recipientTarget);	
	}

	return (
		<div 
			className={`chat-recipient d-flex p-2 mt-1 mb-1 align-items-center cursor-pointer ${recipientTarget?.id === id ? 'bg-lightblue' : ''}`}
			onClick={onClick}
		>
			<div className='p-relative'>
				<Avatar src={src}/>
				<div className={`p-absolute status rounded rounded-circle ${status ? 'bg-success' : 'bg-secondary'}`}>
				
				</div>
			</div>
			<div className='ml-2'>
				<h5 className='m-0 text_black'>{name}</h5>
			</div>
		</div>
	)
}

export default ChatRecipient;