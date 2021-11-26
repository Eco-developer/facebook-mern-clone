import ChatRecipientsSide from '../chat-recipients-side/index.js';
import ChatsMain from '../chats-main/index.js';
import ChatProfileSide from '../chat-profile-side/index.js';
import { FeedLoyout } from '../Loyouts/index.js';
import { useState } from 'react';

const FeedChats = () => {
	const [recipientTarget, setRecipientTarget] = useState(null);

	return (
		<FeedLoyout 
			extend='bg-white flex-nowrap p-relative'
		>
			<ChatRecipientsSide 
				extend='chats-side'
				recipientTarget={recipientTarget}
				setRecipientTarget={setRecipientTarget}
			/>
			<ChatsMain
				recipientTarget={recipientTarget}
			/>
			<ChatProfileSide
				recipientTarget={recipientTarget}
			/>
		</FeedLoyout>
	)
}

export default FeedChats;