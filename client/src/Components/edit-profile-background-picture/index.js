import Image from '../Image/index.js';
import EditHeader from '../edit-header/index.js';
import EditProfileButtons from '../edit-profile-buttons/index.js';
import axios from 'axios';
import FormData from 'form-data';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { PostLoyout } from '../Loyouts/index.js';
import { useProfile } from '../../hooks/index.js' ;
import { 
	useState,
	useRef,
} from 'react';
import { PROFILE_BACKGROUND_PICTURE } from '../../Const/edit-profile-types.js';
import defaultBackrgoundPicture from '../../Images/wp4924004.jpg';

const EditProfileBackgroundPicture = ({display, handleToggle}) => {
	const { 
		userInfo: { 
			profile_background_picture,
			_id,
		},
	} = useProfile();
	const [currentPicture, setCurrentPicture] = useState(profile_background_picture);
	const [newPicture, setNewPicture] = useState(defaultBackrgoundPicture);
	const [image, setImage] = useState(null);
	const [ processing, setProcessing] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failure, setFailure] = useState(false);
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
		setCurrentPicture(profile_background_picture);
		setNewPicture(defaultBackrgoundPicture);
		handleToggle();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!image || processing) { return }
		setProcessing(true);
		const formatImg = new FormData();
		const headers = {
			'accept': 'application/json',
			'Accept-Language': 'en-US, en;q=0.8',
			'Content-Type': `multipart/form-data: boundary=${formatImg._boundary}`,
		};
		formatImg.append('file', image, image.name);
		let newProfileBackgroundPicture;
		try {
			const response = await axios.post(
				`${FACEBOOK_API}upload/image`,
				formatImg,
				{ headers: headers }
			);
			const { data: { filename } } = response;
			newProfileBackgroundPicture = filename;
		} catch (error) {
			setFailure(true);
			setTimeout(()=>{
				setFailure(false);
				setProcessing(false);
				onHandleToggle();
			}, 1500);
		}
		if (!newProfileBackgroundPicture) { return }
		try {
			await axios.put(
				`${FACEBOOK_API}edit/profile/${_id}`,
				{ type: PROFILE_BACKGROUND_PICTURE, newProfileBackgroundPicture }
			);
			setSuccess(true);
			setTimeout(()=>{
				setSuccess(false);
				setProcessing(false);
				onHandleToggle();
			}, 1500);
		} catch (err) {
			setFailure(true);
			setTimeout(()=>{
				setFailure(false);
				setProcessing(false);
				onHandleToggle();
			}, 1500);
		}
	};

	return (
		display ?
		<div className='edit-profile-container'>
			<PostLoyout mnres={false}>
				<EditHeader
					title='Edit Background picture'
					onClick={onHandleToggle}
				/>			
				<div className='d-flex flex-grow-1 mt-2 mb-2 justify-content-center align-items-center re-post-image'>
					<Image
						src={currentPicture}
						defaultImage={newPicture}
					/>
				</div>
				<EditProfileButtons
					handleSubmit={handleSubmit}
					onSetImage={onSetImage}
					inputRef={inputRef}
					onChange={onChange}
					processing={processing}
					success={success}
					failure={failure}
				/>
			</PostLoyout>
		</div>
		:null
	)
}

export default EditProfileBackgroundPicture;