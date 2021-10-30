import FriendsMiniaturContainer from '../friends-miniatur/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import { useProfile } from '../../hooks/index.js';

const MyFriendsSide = ({onClick}) => {
	const { friends } = useProfile();
	return (
		<PostLoyout>
			<div className='d-flex align-items-center flex-grow-1 justify-content-between'>
				<h5 className='m-0 text_black cursor-default'>Friends</h5>
				<h6
					className='m-0 text-primary cursor-pointer'
					onClick={onClick}
				>
					See all Friends
				</h6>
			</div>
			{friends.length ?
				<FriendsMiniaturContainer
					friends={friends}
					length={4}
					size='w-50'
				/>
			:null}
		</PostLoyout>
	)
}

export default MyFriendsSide;