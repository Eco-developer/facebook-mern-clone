import { 
	BackButtonLg, 
	FilterButton,
} from '../Buttons/index.js';
import { useState } from 'react';

const FeedSide = ({children}) => {
	const [open, setOpen] = useState(false);

	const handleOpen = ({children}) => {
		setOpen(!open)
	}

	return (
		<>
			<div 
				className={`feed-people-side bg-white overflow-y transition-4s-eio ${ open ? 'open-feed-side' : ''}`}
			>
				<div className='d-flex flex-column h-fill p-3'>
					<BackButtonLg 
						onClick={handleOpen}
						extend='mb-2'
					/>
					{children}
				</div>
			</div>
			<FilterButton onClick={handleOpen}/>
		</>
	)
}

export default FeedSide;