import AddStory from '../add-story/index.js';
import Image from '../Image/index.js';
import CreateStory from '../create-story/index.js';
import defaultProfilePic from '../../Images/blank-profile-picture-973460_1280.png';
import { connect } from 'react-redux';
import { useState } from 'react';

const mapStateToProps = (state) => (
	{ user : state.user }
)

const UserStoryBase = ({user}) => {	
	const [toggle, setToggle] = useState(false);
	const {
		displayName,
		displayPhoto,
		_id,
	} = user;

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<div 
				className='story mr-3'
				onClick={handleToggle}
			>
				<AddStory/>
				<Image
					src={displayPhoto}
					defaultImage={defaultProfilePic}
				/>
			</div>
			{toggle ?
				<CreateStory
					handleToggle={handleToggle}
					userName={displayName}
					userId={_id}
				/>
			: null}
		</>
	)
}

const UserStory = connect(mapStateToProps)(UserStoryBase)

export default UserStory;