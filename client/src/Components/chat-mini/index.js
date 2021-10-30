import ChatMiniContainer from './chat-mini-container.js';
import { connect } from 'react-redux';
import { 
	useState,
	useEffect
} from 'react';
import { filterMessages } from '../../services/Selectors/index.js';
import { setResipientTarget } from '../../actions/index.js';
import { CHATS } from '../../Const/header.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleResipientTarget: (target) => dispatch(setResipientTarget(target)),
	};
};

const mapStateToProps = (state) => (
	{
		sender : state.user._id, 
		messages: state.messages,
		resipientTarget: state.resipientTarget,
		headerPage: state.header,
	}
)

const ChatMiniBase = ({resipientTarget=null, sender='', messages, handleResipientTarget, headerPage}) => {
	const [ toggleChat, setToggle ] = useState(false);
	const filteredMessages = resipientTarget ? filterMessages(messages, resipientTarget.id) : [];
	const onHandleResipientTarget = () => {
		handleResipientTarget(null);
	};

	const handleToggle = () => {
		setToggle(!toggleChat);
	};

	useEffect(() => {
		if (headerPage && headerPage[CHATS]) {
			handleResipientTarget(null);
		}
	}, [headerPage])
	

	return (
		resipientTarget ? 
		<ChatMiniContainer 
			messages={filteredMessages}
			sender={sender}
			resipientTarget={resipientTarget}
			onHandleResipientTarget={onHandleResipientTarget}
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