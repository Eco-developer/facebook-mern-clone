import Input from '../Input/index.js'
import { IconButton } from '@material-ui/core';
import { Search, VideoCall } from '@material-ui/icons';
import { useState } from 'react';

const ChatHeader = ({filterKey, setFilterKey}) => {
	const [toggle, setToggle] = useState(false);

	const onSetToggle = () => {
		setToggle(!toggle);
		if (toggle) {
			setFilterKey('');
		}
	}

	const onSetFilter = (e) => {
		const { value } = e.target;
		setFilterKey(value);
	}

	return (
		<div className='chat-header p-1 mt-1 mb-1 d-flex align-items-center p-relative'>
			<div className='d-flex height-fit flex-grow-1 align-items-center'>
				<h5 className='m-0 pb-1 text_black'>
					Contacts
				</h5>
			</div>
			<IconButton>
				<VideoCall className='text_black'/>
			</IconButton>
			<Input 
				id='chats-filter-input'
				placeholder='search a user'
				value={filterKey}
				onChange={onSetFilter}
				highlight={`p-absolute transition-4s-eio chatheader-input ${toggle ? 'chatheader-input-open ' : ''}`}
			/>
			<IconButton onClick={onSetToggle}>
				<Search className='text_black'/>
			</IconButton>
		</div>
	)
}

export default ChatHeader;