import ChatHeader from '../chat-header/index.js';
import ChatResipients from '../chat-resipients/index.js';
import { useState } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../services/Selectors/index.js';

const mapStateToProps = (state) => (
	{ users: state.users, uId: state.user._id }
)

const ChatResipientsSideBase = ({users, uId, extend='', setResipientTarget=null, resipientTarget}) => {
	const [filterKey, setFilterKey] = useState('');
	const friends = getFriends(users, uId);
	return (
		<div className={`m-0 p-0 overflow-y ${extend}`}>
			<div className='d-flex p-3 flex-column w-100 h-fill'>
				<ChatHeader 
					filterKey={filterKey}
					setFilterKey={setFilterKey}
				/>
				<ChatResipients
					users={friends}
					filterKey={filterKey}
					setResipientTarget={setResipientTarget}
					resipientTarget={resipientTarget}
				/>
			</div>
		</div>
	)
}

const ChatResipientsSide = connect(mapStateToProps)(ChatResipientsSideBase);

export default ChatResipientsSide;