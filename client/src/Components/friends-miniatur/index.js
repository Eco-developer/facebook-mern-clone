import FriendCard from '../friend-card/index.js'
import {v4 as uuid} from 'uuid';

const FriendsMiniaturContainer = ({friends, length, size=''}) => (
	<div className='d-flex flex-row mt-2 mb-2 flex-wrap flex-grow-1 mn-2'>
		{friends.slice(0, length).map(({displayName, displayPhoto, _id}) => (
			<FriendCard
				key={uuid()}
				size={size}
				id={_id}
				displayPhoto={displayPhoto}
				displayName={displayName}
			/>
		))}
	</div>
)

export default FriendsMiniaturContainer;