import { IconButton } from '@material-ui/core';
import { ArrowDropDownCircleOutlined } from '@material-ui/icons';

const LoadMoreButton = ({onClick, nodeRef}) => (
	<div className='mntb-2 d-flex align-items-center justify-content-center'>
		<IconButton onClick={onClick}>
			<ArrowDropDownCircleOutlined 
				className='text_black transition-4s-eio'
				ref={nodeRef}
			/>
		</IconButton>
	</div>
)

export default LoadMoreButton;