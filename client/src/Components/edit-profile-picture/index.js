import Image from '../Image/index.js';
import EditHeader from '../edit-header/index.js';
import EditProfileButtons from '../edit-profile-buttons/index.js';
import axios from 'axios';
import FormData from 'form-data';
import FACEBOOK_API from '../../Const/facebookApi.js';
import blankImage  from '../../Images/blank-profile-picture-973460_1280.png';
import { PostLoyout } from '../Loyouts/index.js';
import { useProfile } from '../../hooks/index.js';
import { 
	useState,
	useRef,
} from 'react';
import { PROFILE_PICTURE } from '../../Const/edit-profile-types.js';
import { CHANGE_PROFILE_PICTURE } from '../../Const/notification-types.js';

const EditProfilePicture = ({display, handleToggle}) => {
	const { 
		userInfo: { 
			displayPhoto,
			_id,
		},
	} = useProfile();
	const [currentPicture, setCurrentPicture] = useState(displayPhoto);
	const [newPicture, setNewPicture] = useState(blankImage);
	const [image, setImage] = useState(null);
	const inputRef =  useRef(null);

	const onSetImage = () => {
		inputRef.current.click();
	};

	const onChange = (e) => {
		if (currentPicture) {
			setCurrentPicture(null);
		}
		if (e.target.files[0]) {
			const fileTarget = e.target.files[0];
			const photo = URL.createObjectURL(fileTarget);
			setNewPicture(photo);
			setImage(fileTarget);
		}
	};

	const onHandleToggle = () => {
		setCurrentPicture(displayPhoto);
		setNewPicture(blankImage);
		handleToggle();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!image) { return }
		const formatImg = new FormData();
		const headers = {
			'accept': 'application/json',
			'Accept-Language': 'en-US, en;q=0.8',
			'Content-Type': `multipart/form-data: boundary=${formatImg._boundary}`,
		};
		formatImg.append('file', image, image.name);
		let newProfilePicture;
		try {
			const response = await axios.post(
				`${FACEBOOK_API}upload/image`,
				formatImg,
				{ headers: headers }
			);
			const { data: { filename } } = response;
			newProfilePicture = filename;
		} catch (error) {
			console.log(error);
		}
		if (!newProfilePicture) { return }

		const notification = {
			type: CHANGE_PROFILE_PICTURE,
			user_id: _id,
		};

		try {
			await axios.put(
				`${FACEBOOK_API}edit/profile/${_id}`,
				{ type: PROFILE_PICTURE, newProfilePicture }
			);
			await axios.post(
				`${FACEBOOK_API}upload/notification`,
				notification
			)
		} catch (err) {
			console.log(err);
		}
		onHandleToggle();
	};

	return (
		display ?
		<div className='edit-profile-container'>
			<PostLoyout mnres={false}>
				<EditHeader
					title='Edit profile picture'
					onClick={onHandleToggle}
				/>			
				<div className='d-flex flex-grow-1 mt-2 mb-2 justify-content-center align-items-center'>
					<Image
						className='edit-profile-avatar'
						src={currentPicture}
						defaultImage={newPicture}
					/>
				</div>
				<EditProfileButtons
					handleSubmit={handleSubmit}
					onSetImage={onSetImage}
					inputRef={inputRef}
					onChange={onChange}
				/>
			</PostLoyout>
		</div>
		: null
	)
}

export default EditProfilePicture;