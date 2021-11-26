import ChatRecipient from '../chat-recipient/index.js';
import {v4 as uuid} from 'uuid';

const filterUsers = (list, key) => (
	list.filter((entity) => entity.displayName.toLowerCase().includes(key.toLocaleLowerCase()))
)

const ChatRecipients = ({users, filterKey, setRecipientTarget, recipientTarget}) => (
	<div className='h-fill overflow-y'>
		<div className='d-flex flex-column height-fit'>
			{users.length ? 
				filterUsers(users, filterKey).map(user => (
				<ChatRecipient
					key={uuid()}
					id={user._id}
					src={user.displayPhoto}
					name={user.displayName}
					recipientTarget={recipientTarget}
					status={true}
					setRecipientTarget={setRecipientTarget}
				/>
			)): null}
		</div>
	</div>
)

export default ChatRecipients;