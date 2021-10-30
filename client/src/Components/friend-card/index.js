import Image from '../Image/index.js';
import defaultProfilePic from '../../Images/blank-profile-picture-973460_1280.png';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoadingProfile } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoading: (status) => dispatch(setLoadingProfile(status)),
	};
};

const FriendCardBase = ({size, id, displayPhoto, displayName, handleLoading}) => {
	const { push } = useHistory();

	const handleProfile = () => {
		handleLoading(true);
		push(id);
	}

	return (
		<div 
			className={`height-fit d-flex flex-column m-2 ${size}`}
		>
			<div 
				className='background-image friends-miniatur cursor-pointer'
				onClick={handleProfile}
			>
				<Image
					src={displayPhoto}
					defaultImage={defaultProfilePic}
				/>
			</div>
			<p className='m-0 text_black'>
				{displayName}
			</p>
		</div>
	)
}

const FriendCard = connect(
	null,
	mapDispatchToProps
)(FriendCardBase);

export default FriendCard;