import { Close } from '@material-ui/icons';

const PreviewImage = ({onClick, src}) => (
	<div className='p-relative mt-3 d-flex justify-content-center'>
		<div 
			className='p-absolute p-1 border-danger rounded-circle cursor-pointer cancel-container'
			onClick={onClick}
		>
			<Close className='text-danger'/>
		</div>
		<img 
			src={src} 
			alt='post' 
			className='img-post'	
		/>
	</div>
)

export default PreviewImage;