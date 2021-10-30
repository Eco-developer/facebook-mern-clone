import Message from '../Message/index.js';
import {v4 as uuid} from 'uuid';

const MessagesContainer = ({messages, sender, extend=''}) => (
	<div className={`overflow-y chats-container ${extend}`}>
		<div className='height-fit'>
			{messages?.length ? 
				messages.map((message) => {
					const isCurrentUser = sender === message.sender;
					return(
						<Message
							key={uuid()}
							isCurrentUser={isCurrentUser}
							text={message.text}
							timestamp={message.updatedAt}
						/>
					)
				})
			: null}
			<div 
				className='w-100'
				style={{
					height: '25px'
				}}
			>
			</div>
		</div>
	</div>
)

export default MessagesContainer;