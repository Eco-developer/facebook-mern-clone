import ChatHeader from '../chat-header/index.js';
import ChatRecipients from '../chat-recipients/index.js';
import { useState } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../services/Selectors/index.js';

const mapStateToProps = (state) => (
	{ 
		users: state.users, 
		uId: state.user._id
	}
)

const ChatRecipientsSideBase = ({users, uId, extend='', setRecipientTarget=null, recipientTarget}) => {
	const [filterKey, setFilterKey] = useState('');
	const friends = getFriends(users, uId);
	return (
		<div className={`m-0 p-0 overflow-y ${extend}`}>
			<div className='d-flex p-3 flex-column w-100 h-fill'>
				<ChatHeader 
					filterKey={filterKey}
					setFilterKey={setFilterKey}
				/>
				<ChatRecipients
					users={friends}
					filterKey={filterKey}
					setRecipientTarget={setRecipientTarget}
					recipientTarget={recipientTarget}
				/>
			</div>
		</div>
	)
}

const ChatRecipientsSide = connect(mapStateToProps)(ChatRecipientsSideBase);

export default ChatRecipientsSide;