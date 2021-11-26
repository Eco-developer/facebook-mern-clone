import Button from '../Buttons/index.js';
import Form from '../Forms/index.js';
import { InputFile } from '../Input/index.js';
import { SentButton } from '../Buttons/index.js';
import {
	CheckCircleOutline,
	ErrorOutline
} from '@material-ui/icons';

const EditProfileButtons = ({handleSubmit, onSetImage, inputRef, onChange, changeBtn='Edit', postBtn='Save Changes', processing=false, success, failure}) => (
	<Form onSubmit={handleSubmit}>
		<div className='d-flex flex-column'>
			<SentButton
				onClick={onSetImage}
			>
				<p className='text-primary m-0'>
					{changeBtn}
				</p>
			</SentButton>
			<InputFile
				id='edit-profile-input'
				nodeRef={inputRef}
				onChange={onChange}
			/>
			<div className='mt-2 d-flex justify-content-end p-relative'>
				<SentMessage
					active={success}
					Icon={CheckCircleOutline}
					color='bg-success'
				/>
				<SentMessage
					active={failure}
					Icon={ErrorOutline}
					color='bg-danger'
				/>
				<Button 
					className='btn btn-primary w-100 rounded-10'
					type='submit'
					onClick={handleSubmit}
					disabled={processing}
				>
					{postBtn}
				</Button>
			</div>
			
		</div>
	</Form>
)

export default EditProfileButtons;