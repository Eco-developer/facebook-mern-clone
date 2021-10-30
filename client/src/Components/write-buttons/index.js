import { InputFile } from '../Input/index.js';
import { 
	PhotoLibrary, 
	LocationOn, 
	VideoLibrary 
} from '@material-ui/icons';

const WriteButtons = ({onClick, onChange, nodeRef}) => {
	return (
		<div className='d-flex mt-2 mb-2 align-items-center flex-grow-1'>
			<WriteButton onClick={onClick}>
				<PhotoLibrary className='text-success'/>
				<p className='m-0 ml-2'>Photo</p>	
				<InputFile 
					nodeRef={nodeRef}
					id="file-input" 
					onChange={onChange}	
				/>
			</WriteButton>
			<WriteButton extend='ml-1 mr-1'>
				<LocationOn className='text-danger'/>
				<p className='m-0 ml-2'>Location</p>
			</WriteButton>
			<WriteButton>
				<VideoLibrary className='text-info'/>
				<p className='m-0 ml-2'>Video</p>
			</WriteButton>
		</div>
	)
}

const WriteButton = ({onClick, children, extend=''}) => (
	<div 
		className={`write-button d-flex align-items-center p-2 cursor-pointer flex-grow-1 justify-content-center transition-4s-eio ${extend}`}
		onClick={onClick}
	>
		{children}
	</div>
)

export default WriteButtons;