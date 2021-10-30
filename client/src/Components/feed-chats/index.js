import ChatResipientsSide from '../chat-resipients-side/index.js';
import ChatsMain from '../chats-main/index.js';
import ChatProfileSide from '../chat-profile-side/index.js';
import { FeedLoyout } from '../Loyouts/index.js';
import { useState } from 'react';

const FeedChats = () => {
	const [resipientTarget, setResipientTarget] = useState(null);

	return (
		<FeedLoyout 
			extend='bg-white flex-nowrap p-relative'
		>
			<ChatResipientsSide 
				extend='chats-side'
				resipientTarget={resipientTarget}
				setResipientTarget={setResipientTarget}
			/>
			<ChatsMain
				resipientTarget={resipientTarget}
			/>
			<ChatProfileSide
				resipientTarget={resipientTarget}
			/>
		</FeedLoyout>
	)
}

export default FeedChats;