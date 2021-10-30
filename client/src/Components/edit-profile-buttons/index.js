import Button from '../Buttons/index.js';
import Form from '../Forms/index.js';
import { InputFile } from '../Input/index.js';
import { DivButton } from '../Buttons/index.js';

const EditProfileButtons = ({handleSubmit, onSetImage, inputRef, onChange, changeBtn='Edit', postBtn='Save Changes'}) => (
	<Form onSubmit={handleSubmit}>
		<div className='d-flex flex-column'>
			<DivButton
				onClick={onSetImage}
			>
				<p className='text-primary m-0'>
					{changeBtn}
				</p>
			</DivButton>
			<InputFile
				id='edit-profile-input'
				nodeRef={inputRef}
				onChange={onChange}
			/>
			<Button 
				className='btn btn-primary flex-grow-1 rounded-10 mt-2'
				type='submit'
				onClick={handleSubmit}
			>
				{postBtn}
			</Button>
		</div>
	</Form>
)

export default EditProfileButtons;