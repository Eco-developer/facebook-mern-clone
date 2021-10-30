import { 
	ArrowBackIos,
	ArrowForwardIos
} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { 
	useState,
	useEffect
} from 'react';

const StoryReelControls = ({nodeRef, innerRef}) => {
	const [left, setLeft] = useState(false);
	const [right, setRight] = useState(false);

	useEffect(() => {
		const init = innerRef.current.getBoundingClientRect().width > nodeRef.current.getBoundingClientRect().width;
		setRight(init)
	}, [])

	const handleScrollRight = () => {
		if ((nodeRef.current.scrollLeft + 150) >= (nodeRef.current.scrollWidth - nodeRef.current.getBoundingClientRect().width)) {
			nodeRef.current.scrollLeft += 150;
			setRight(false);
		} else {
			nodeRef.current.scrollLeft += 150;
		}
		if (!left) {
			setLeft(true);
		}
	}

	const handleScrollLeft = () => {
		if (nodeRef.current.scrollLeft > 0) {
			if (nodeRef.current.scrollLeft - 150 <= 0) {
				nodeRef.current.scrollLeft -= 150;
				setLeft(false);
			} else {
				nodeRef.current.scrollLeft -= 150;
			}
		}
		if (!right) {
			setRight(true);
		}
	}

	return (
		<>
			{left ? 
				<div className='p-absolute display-max bg-white rounded-circle p-0 m-0 shadow-md reel-control-left'>
					<IconButton 
						onClick={handleScrollLeft}
					>
						<ArrowBackIos className='text_black'/>
					</IconButton>
				</div>
			: null}
			{right ?
				<div className='p-absolute display-max bg-white rounded-circle p-0 m-0 shadow-md reel-control-right'>
					<IconButton
						onClick={handleScrollRight}
					>
						<ArrowForwardIos className='text_black'/>
					</IconButton>
				</div>
			: null}
		</>
	)
}

export default StoryReelControls;