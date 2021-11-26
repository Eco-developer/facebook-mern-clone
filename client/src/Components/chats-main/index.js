import MessagesContainer from '../message-container/index.js';
import MessageSender from '../message-sender/index.js';
import { BackButton } from '../Buttons/index.js';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { filterMessages } from '../../services/Selectors/index.js';

const mapStateToProps = (state) => (
	{ sender : state.user._id, messages: state.messages }
)

const ChatsMainBase = ({recipientTarget=null, sender, messages}) => {
	const chatsRef = useRef();

	const handleHide = () => {
		chatsRef.current.style.setProperty('transform', 'translate(100%)')
	};

	const filteredMessages = recipientTarget ? filterMessages(messages, recipientTarget.id) : [];
	return (
		<div 
			className={`m-0 p-0 chats-main  p-3 p-relative transition-4s-eio-res ${ recipientTarget ? 'bg-grayblue' : 'bg-white'}`}
			ref={chatsRef}
		>
			<BackButton onClick={handleHide}/>
			<MessagesContainer 
				messages={filteredMessages}
				sender={sender}
			/>
			{recipientTarget &&
				<MessageSender 
					sender={sender}
					reciver={recipientTarget.id}
				/>
			}
		</div>
	)
}

const ChatsMain = connect(mapStateToProps)(ChatsMainBase)

export default ChatsMain;