import MessagesContainer from '../message-container/index.js';
import MessageSender from '../message-sender/index.js';
import ChatMiniHeader from './chat-mini-header.js';

const ChatMiniContainer = ({messages, sender, resipientTarget, onHandleResipientTarget, handleToggle, toggleChat}) => (
	<div 
		className={`m-0 p-0 chat-mini shadow-md bg-grayblue display-max overflow-hidden transition-4s-eio ${toggleChat ? 'chat-close' : ''}`}
	>
		<ChatMiniHeader
			resipientTarget={resipientTarget}
			onHandleResipientTarget={onHandleResipientTarget}
			handleToggle={handleToggle}
		/>
		<MessagesContainer 
			messages={messages}
			sender={sender}
			extend='p-2 h-13'
		/>
		<MessageSender 
			sender={sender}
			reciver={resipientTarget.id}
		/>
	</div>
)

export default ChatMiniContainer;