import ChatResipient from '../chat-resipient/index.js';
import {v4 as uuid} from 'uuid';

const filterUsers = (list, key) => (
	list.filter((entity) => entity.displayName.toLowerCase().includes(key.toLocaleLowerCase()))
)

const ChatResipients = ({users, filterKey, setResipientTarget, resipientTarget}) => (
	<div className='h-fill overflow-y'>
		<div className='d-flex flex-column height-fit'>
			{users.length ? 
				filterUsers(users, filterKey).map(user => (
				<ChatResipient
					key={uuid()}
					id={user._id}
					src={user.displayPhoto}
					name={user.displayName}
					resipientTarget={resipientTarget}
					status={true}
					setResipientTarget={setResipientTarget}
				/>
			)): null}
		</div>
	</div>
)

export default ChatResipients;