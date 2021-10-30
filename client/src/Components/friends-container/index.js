import FriendsMiniaturContainer from '../friends-miniatur/index.js';

const FriendsContainer = ({friends, filterKey}) => {
	if (!friends?.length) {
		return (
			<div className='flex-grow-1 d-flex'>
				<h6 className='flex-grow-1 m-0 text_black'>
					You do not have any friends
				</h6>
			</div>
		)
	}
	const filtered = friends.filter((friend) => friend.displayName.toLowerCase().includes(filterKey.toLowerCase()));
	return (
		filtered?.length ? 
			<FriendsMiniaturContainer
				friends={filtered}
				length={filtered?.length}
				size='w-25 h-10'
			/> :
			<div className='flex-grow-1 d-flex'>
				<h6 className='flex-grow-1 m-0 text_black'>
					There are not friends with that name
				</h6>
			</div>
	)
}

export default FriendsContainer;