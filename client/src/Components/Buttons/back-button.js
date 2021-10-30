import { ArrowBackIos } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const BackButton = ({onClick}) => (
	<div 
		onClick={onClick}
		className='rounded rounded-circle bg-white shadow-md d-flex justify-content-center align-items-center  display-min p-absolute'
		style={{
			top: '5%',
			left: '5%'
		}}
	>	
		<IconButton>
			<ArrowBackIos className='text-primary pl-2'/>
		</IconButton>	
	</div>
)

export default BackButton;