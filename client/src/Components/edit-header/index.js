import { IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const EditHeader = ({title='', onClick}) => (
	<div 
		className='w-100 pb-2 d-flex justify-content-center align-items-center p-relative'
	>
		<h6 className='m-0 text_black'>
			{title}
		</h6>
		<div 
			className='p-absolute' 
			style={{
				right: '0'
			}}
		>
			<IconButton 
				onClick={onClick}
			>
				<Clear/>
			</IconButton>
		</div>
	</div>
)

export default EditHeader; 