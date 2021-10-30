import {
	ArrowBackIos,
	ArrowForwardIos
} from '@material-ui/icons';

export const LeftControl = ({onClick}) => (
	<div 
		className='left-control p-absolute cursor-pointer d-flex align-items-center justify-content-center transition-4s-eio'
		onClick={onClick}
	>
		<ArrowBackIos/>
	</div>	
)

export const RightControl = ({onClick}) => (
	<div 
		className='right-control p-absolute cursor-pointer d-flex align-items-center justify-content-center transition-4s-eio'
		onClick={onClick}
	>
		<ArrowForwardIos/>
	</div>	
)