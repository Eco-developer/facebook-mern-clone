import Form from '../Forms/index.js';
import Button from '../Buttons/index.js';
import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { Textarea } from '../Input/index.js';
import { Send } from '@material-ui/icons';
import { 
	useState,
	useEffect
} from 'react';

const MessageSender = ({reciver, sender=''}) => {
	const [ text, setText ] = useState('');
	const disabled = !text.trim();

	useEffect(() => {
		setText('')
	}, [reciver])

	const onChange = (e) => {
		const { target: { value } } = e;
		setText(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (disabled) { return; }
		try {
			await axios.post(
				`${FACEBOOK_API}message`, 
				{
					sender,
					reciver,
					text
				}
			);	
		} catch (error) {
			console.error(error);
		}
		setText('');
	}

	return (
		<Form onSubmit={handleSubmit}>
			<div className='form-group m-0 p-2 rounded bg-white shadow-sm d-flex align-items-center'>
				<Textarea
					value={text}
					onChange={onChange}
					className='chat-input overflow-y flex-grow-1 ml-1 mr-1'
					placeholder='Say something'
				/>
				<Button 
					className='btn btn-primary btn-sm'
					type='submit'
					onClick={handleSubmit}
					disabled={disabled}
				>
					<Send/>
				</Button>
			</div>
		</Form>
	)
}

export default MessageSender;