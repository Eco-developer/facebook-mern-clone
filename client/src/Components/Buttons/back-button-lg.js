import { ArrowBackIos } from '@material-ui/icons';

const BackButtonLg = ({onClick, extend=''}) => (
	<div 
		className={`d-flex cursor-pointer align-items-center display-min ${extend}`}
		onClick={onClick}
	>
		<ArrowBackIos className='text_black'/>
		<div className='ml-2'>
			<h6 className='text_black m-0'>
				Back
			</h6>
		</div>
	</div>
)

export default BackButtonLg;