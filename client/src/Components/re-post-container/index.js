import Avatar from '../Avatar/index.js';
import Image from '../Image/index.js';
import Button from '../Buttons/index.js';
import Form from '../Forms/index.js';
import SentMessage from '../sent-message/index.js';
import EditHeader from '../edit-header/index.js';
import { Textarea } from '../Input/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import {
	CheckCircleOutline,
	ErrorOutline
} from '@material-ui/icons';

const RePostContainer = ({user=null, headerTitle, button, postUrl, onHandleRePost, onChangeText, sentMessages=false, success, failure, processing=false, handleSubmit, text}) => (
	<div className='re-post-container'>
		<PostLoyout mnres={false}>
			<EditHeader
				title={headerTitle}
				onClick={onHandleRePost}
			/>
			{user &&
				 <div className='mb-2 d-flex align-items-center'>
					<Avatar
						src={user.displayPhoto}
					/>
					<p className='m-0 ml-2 text_black'>
						{user.displayName}
					</p>
				</div>}
			<Textarea 
				className='w-100 overflow-y re-post-input mb-2'
				placeholder='Write something'
				onChange={onChangeText}
				value={text}
			/>			
			<div 
				className='flex-grow-1 re-post-image mb-2'
			>
				<Image 
					src={postUrl} 
				/>
			</div>
			<Form onSubmit={handleSubmit}>
				<div className='mt-2 d-flex justify-content-end p-relative'>
					{sentMessages ?
					(<>
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
					</>)
					: null}
					<Button
						className='btn btn-primary w-100'
						type='submit'
						onClick={handleSubmit}
						disabled={processing}
					>
						{button}
					</Button>
				</div>
			</Form>
		</PostLoyout>
	</div>
)

export default RePostContainer;