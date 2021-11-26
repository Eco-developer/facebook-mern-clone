import Button from '../Buttons/index.js';
import PreviewImage from '../preview-image/index.js';
import WriteHeader from '../write-header/index.js';
import WriteButtons from '../write-buttons/index.js';
import Form from '../Forms/index.js';
import { Textarea } from '../Input/index.js';
import SentMessage from '../sent-message/index.js';
import {  PostLoyout } from '../Loyouts/index.js';
import {
	CheckCircleOutline,
	ErrorOutline
} from '@material-ui/icons';

const WriteSomethingContainer = ({displayName, displayPhoto, image, text, uid,onChangeText, onClose, onSetImage, onChangeImage, inputRef, success, failure, processing, handleSubmit}) => (
	<PostLoyout>
			<WriteHeader
				uid={uid}
				src={displayPhoto}
				name={displayName}
			/> 
			<Form>
				<Textarea 
					className='write-textarea form-control'
					value={text}
					onChange={onChangeText}
					placeholder='Write something'
				/>
				{image ? 
					<PreviewImage
						src={image.currentImage}
						onClick={onClose}
					/> 
				: null}
				<WriteButtons
					onClick={onSetImage}
					onChange={onChangeImage}
					nodeRef={inputRef}
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
						className='btn btn-primary w-100'
						disabled={(!image && !text.trim()) || processing}
						onClick={handleSubmit}
					>
						Post
					</Button>
				</div>
			</Form>
		</PostLoyout>
)

export default WriteSomethingContainer;