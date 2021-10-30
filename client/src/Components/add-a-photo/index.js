import EditHeader from '../edit-header/index.js';
import EditProfileButtons from '../edit-profile-buttons/index.js';
import AddAPhotoIcon  from '@material-ui/icons/AddAPhoto';
import Image from '../Image/index.js';
import axios from 'axios';
import FormData from 'form-data';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { Textarea } from '../Input/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import { useProfile } from '../../hooks/index.js' ;
import { 
	useState,
	useRef,
} from 'react';
import {v4 as uuid} from 'uuid';
import { PROFILE_PHOTOS } from '../../Const/edit-profile-types.js';
import { ADD_PHOTO } from '../../Const/notification-types.js';

const AddAPhoto = ({handleToggle}) => {
	const [currentPicture, setCurrentPicture] = useState(null);
	const [image, setImage] = useState(null);
	const [text, setText] = useState('');
	const inputRef =  useRef(null);

	const { 
		userInfo: { 
			displayName,
			displayPhoto,
			_id,
		},
	} = useProfile();

	const onChangeText = (e) => {
		const { target: { value } } = e;
		setText(value);
	}

	const onSetImage = () => {
		inputRef.current.click();
	};

	const onChangeImage = (e) => {
		if (e.target.files[0]) {
			const fileTarget = e.target.files[0];
			const photo = URL.createObjectURL(fileTarget);
			setCurrentPicture(photo);
			setImage(fileTarget);
		}
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!image) { return }
		let postImage;
	
		const formatImg = new FormData();
		const headers = {
			'accept': 'application/json',
			'Accept-Language': 'en-US, en;q=0.8',
			'Content-Type': `multipart/form-data: boundary=${formatImg._boundary}`,
		};
		formatImg.append('file', image, image.name);
		try {
			const response = await axios.post(
					`${FACEBOOK_API}upload/image`,
					formatImg,
					{ headers: headers }
			);
			const { data: { filename } } = response;
			postImage = filename;
		} catch (error) {
			console.log(error);
		}

		const postData = {
			user_name: displayName,
			user_id: _id,
			user_avatar: displayPhoto,
			post_image: postImage,
			description: text,
			comments_id: uuid(),
			location: '',
		};
		const notification = {
			type: ADD_PHOTO,
			user_id: _id,
		};
		let photoId;

		try {
			const response = await axios.post(
				`${FACEBOOK_API}upload/post`,
				postData
			);	

			const { data } = response;
			photoId = data;	

		} catch (err) {
			console.log(err);
		}
		try {
			await axios.put(
				`${FACEBOOK_API}edit/profile/${_id}`,
				{ type: PROFILE_PHOTOS, photoId }
			);

			await axios.post(
				`${FACEBOOK_API}upload/notification`,
				notification
			)
		} catch (err) {
			console.log(err);
		}
		handleToggle();
	}

	return (
		<div className='edit-profile-container'>
			<PostLoyout
				mnres={false}
				extend='pt-4'
			>
				<EditHeader
					onClick={handleToggle}
					title='Add a photo'
				/>
				<div className='add-container d-flex flex-grow-1'>
					<div className='add-container-right d-flex justify-content-center align-items-center m-1'>
						{currentPicture ?
							<Image
								defaultImage={currentPicture}
							/> :
							<AddAPhotoIcon
								className='add-photo-icon'
								onClick={onSetImage}
							/>
						}
					</div>
					<div className='add-container-left d-flex justify-content-center align-items-center m-1 flex-column'>
						<Textarea 
							className='w-100 overflow-y re-post-input mb-2'
							placeholder='Write a description'
							onChange={onChangeText}
							value={text}
						/>
						<EditProfileButtons
							handleSubmit={handleSubmit}
							onSetImage={onSetImage}
							inputRef={inputRef}
							onChange={onChangeImage}
							changeBtn='Change'
							postBtn='Post'
						/>
					</div>
				</div>
			</PostLoyout>
		</div>
	)
}

export default AddAPhoto;