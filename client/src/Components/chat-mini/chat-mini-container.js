import MessagesContainer from '../message-container/index.js';
import MessageSender from '../message-sender/index.js';
import ChatMiniHeader from './chat-mini-header.js';

const ChatMiniContainer = ({messages, sender, recipientTarget, onHandleRecipientTarget, handleToggle, toggleChat}) => (
	<div 
		className={`m-0 p-0 chat-mini shadow-md bg-grayblue display-max overflow-hidden transition-4s-eio ${toggleChat ? 'chat-close' : ''}`}
	>
		<ChatMiniHeader
			recipientTarget={recipientTarget}
			onHandleRecipientTarget={onHandleRecipientTarget}
			handleToggle={handleToggle}
		/>
		<MessagesContainer 
			messages={messages}
			sender={sender}
			extend='p-2 h-13'
		/>
		<MessageSender 
			sender={sender}
			reciver={recipientTarget.id}
		/>
	</div>
)

export default ChatMiniContainer;