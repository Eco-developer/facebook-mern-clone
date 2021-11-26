import WriteSomethingContainer from '../write-something-container/index.js';
import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import FormData from 'form-data';
import { 
	useState, 
	useRef 
} from 'react';
import { connect } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { MAKE_POST } from '../../Const/notification-types.js';

const mapStateToProps = (state) => (
	{ user : state.user }
)

const WriteSomethingBase = ({user}) => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState('');
	const [success, setSuccess] = useState(false);
	const [failure, setFailure] = useState(false);
	const [ processing, setProcessing] = useState(false);
	const inputRef =  useRef(null);
	
	const {
		displayName,
		displayPhoto,
		_id,
	} = user;

	const onSetImage = () => {
		inputRef.current.click();
	};

	const onClose = () => {
		setImage(null);
	};

	const onChangeImage = (e) => {
		if (e.target.files[0]) {
			const fileTarget = e.target.files[0];
			const photo = URL.createObjectURL(fileTarget);
			
			const fileObj = {
				currentImage: photo,
				file: fileTarget,
			};;
			setImage(fileObj);
		}
	};

	const onChangeText = (e) => {
		const { target: { value } } = e;
		setText(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (processing) {return}
		setProcessing(true);
		let postImage = '';

		if (image) {
			const { file } = image;
			const formatImg = new FormData();
			const headers = {
				'accept': 'application/json',
				'Accept-Language': 'en-US, en;q=0.8',
				'Content-Type': `multipart/form-data: boundary=${formatImg._boundary}`,
			};
			formatImg.append('file', file, file.name);
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
		}

		const postData = {
			user_name: displayName,
			user_id: _id,
			user_avatar: displayPhoto,
			post_image: postImage,
			description: text,
			comments_id: uuid(),
		};

		const notification = {
			type: MAKE_POST,
			user_id: _id,
		};

		try {
			await axios.post(
				`${FACEBOOK_API}upload/post`,
				postData
			);	
			await axios.post(
				`${FACEBOOK_API}upload/notification`,
				notification
			)
			setSuccess(true);
			setTimeout(()=>{
				setSuccess(false);
				setProcessing(false);
			}, 1500);

		} catch (err) {
			setFailure(true);
			setTimeout(()=>{
				setFailure(false);
				setProcessing(false);
			}, 1500);
		}
		
		setImage(null);
		setText('');
	};

	return (
		<WriteSomethingContainer
			displayName={displayName}
			displayPhoto={displayPhoto}
			image={image}
			text={text}
			onChangeText={onChangeText}
			onClose={onClose}
			onSetImage={onSetImage}
			onChangeImage={onChangeImage}
			inputRef={inputRef}
			success={success}
			failure={failure}
			processing={processing}
			handleSubmit={handleSubmit}
			uid={_id}
		/>	
	)
}

const WriteSomething = connect(mapStateToProps)(WriteSomethingBase)

export default WriteSomething;