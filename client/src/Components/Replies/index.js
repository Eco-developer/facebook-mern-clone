import Comments from '../Comments/index.js';
import { LoadMoreButton } from '../Buttons/index.js';
import { 
	useRef, 
	useState
} from 'react';

const Replies = ({replies, handleCommentsId}) => {
	const [displayReplies, setDisplay] = useState(false);
	const heightRef = useRef();
	const arrowRef = useRef();

	const onSetReplies = () => {
		const target = heightRef?.current?.getBoundingClientRect();
		if (target) {
			const { height } = target;
			const { parentElement } = heightRef.current;

			const newTarget = parentElement.closest('.replies-target');
			
			const resize = newTarget.getBoundingClientRect().height;
			if (displayReplies) {
				parentElement.style.setProperty('height', '0', 'important');
				arrowRef.current.style.setProperty('transform', 'rotate(0deg)')
				newTarget.parentElement.style.setProperty('height', `${resize - height}px`, 'important')
				setDisplay(false);
				return;
			} else {
				
				parentElement.style.setProperty('height', `${height}px`, 'important');
				arrowRef.current.style.setProperty('transform', 'rotate(180deg)')
				newTarget.parentElement.style.setProperty('height', `${resize + height}px`, 'important')
				
				setDisplay(true);
				return;
			}	
		}
	}
	return (
		replies ?
			<>
				<Comments 
					comments={replies}
					nodeRef={heightRef}
					handleCommentsId={handleCommentsId}
				/> 
				<LoadMoreButton
					onClick={onSetReplies}
					nodeRef={arrowRef}
				/>
			</>
		: null
	)
}

export default Replies;