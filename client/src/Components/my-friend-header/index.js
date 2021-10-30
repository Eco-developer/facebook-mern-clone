import Input from '../Input/index.js';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const MyFriendsMainHeader = ({filterKey, onChange}) => {
	const handleChange = (e) => {
		const { value } = e.target;
		onChange(value);
	}

	return (
		<div className='flex-grow-1 d-flex align-items-center'>
			<h5 className='flex-grow-1 m-0 text_black'>
				Friends
			</h5>
			<div className='d-flex'>
				<Input 
					id='find-friends'
					value={filterKey}
					onChange={handleChange}
					placeholder='Search friends'
					highlight='rounded-10'
				/>
				<div className='ml-2'>
					<IconButton>
						<Search className='text_black'/>
					</IconButton>
				</div>
			</div>
		</div>
	)
}

export default MyFriendsMainHeader;