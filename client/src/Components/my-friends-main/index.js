import MyFriendsMainHeader from '../my-friend-header/index.js';
import FriendsContainer from '../friends-container/index.js';
import { ProfilePagesLoyout, PostLoyout } from '../Loyouts/index.js';
import { useState } from 'react';
import { useProfile } from '../../hooks/index.js';

const MyFriendsMain = () => {
	const [filterKey, setFilterkey] = useState('');
	const { friends } = useProfile();

	return (
		<ProfilePagesLoyout extend='plr-0'>
  			<PostLoyout 
  				extend='w-100 border-none'
  				mnres={false}
  			>
				<MyFriendsMainHeader
					filterKey={filterKey}
					onChange={setFilterkey}
				/>
				<FriendsContainer
					friends={friends}
					filterKey={filterKey}
				/>
			</PostLoyout>
  		</ProfilePagesLoyout>
	)
}


export default MyFriendsMain;