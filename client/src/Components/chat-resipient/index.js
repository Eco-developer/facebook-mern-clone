import Avatar from '../Avatar/index.js';

const ChatResipient = ({src, name, status, id, setResipientTarget, resipientTarget}) => {
	
	const onClick = (e) => {
		const { target } = e;
		if (window.innerWidth <= 575) {
			const chatMain = document.querySelector('.chats-main');
			chatMain.style.setProperty('transform', 'translate(0)');
		}
		const resipientTarget = {
			src,
			name,
			id,
		};
		setResipientTarget(resipientTarget);	
	}

	return (
		<div 
			className={`chat-resipient d-flex p-2 mt-1 mb-1 align-items-center cursor-pointer ${resipientTarget?.id === id ? 'bg-lightblue' : ''}`}
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

export default ChatResipient;