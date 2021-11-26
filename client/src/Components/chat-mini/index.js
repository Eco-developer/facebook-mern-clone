import ChatMiniContainer from './chat-mini-container.js';
import { connect } from 'react-redux';
import { 
	useState,
	useEffect
} from 'react';
import { filterMessages } from '../../services/Selectors/index.js';
import { setRecipientTarget } from '../../actions/index.js';
import { CHATS } from '../../Const/header.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleRecipientTarget: (target) => dispatch(setRecipientTarget(target)),
	};
};

const mapStateToProps = (state) => (
	{
		sender : state.user._id, 
		messages: state.messages,
		recipientTarget: state.recipientTarget,
		headerPage: state.header,
	}
)

const ChatMiniBase = ({recipientTarget=null, sender='', messages, handleRecipientTarget, headerPage}) => {
	const [ toggleChat, setToggle ] = useState(false);
	const filteredMessages = recipientTarget ? filterMessages(messages, recipientTarget.id) : [];
	const onHandleRecipientTarget = () => {
		handleRecipientTarget(null);
	};

	const handleToggle = () => {
		setToggle(!toggleChat);
	};

	useEffect(() => {
		if (headerPage && headerPage[CHATS]) {
			handleRecipientTarget(null);
		}
	}, [headerPage])
	

	return (
		recipientTarget ? 
		<ChatMiniContainer 
			messages={filteredMessages}
			sender={sender}
			recipientTarget={recipientTarget}
			onHandleRecipientTarget={onHandleRecipientTarget}
			handleToggle={handleToggle}
			toggleChat={toggleChat}
		/> : null
	)
}

const ChatMini = connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatMiniBase);

export default ChatMini;