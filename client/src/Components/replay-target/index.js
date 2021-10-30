import { useRef } from 'react';
import { Clear } from '@material-ui/icons';

const ReplayTarget = ({replayName, setdefaultCommentsId}) => {
	const widthRef = useRef();
	const isOpenRef = useRef(false);

	const onSetOpen = () => {
		const target = widthRef.current.getBoundingClientRect();

		const { width } = target;
		if (isOpenRef.current) {
			widthRef.current.parentElement.style.setProperty('width', '0');
			isOpenRef.current = false;
			return;
		} else {
			widthRef.current.parentElement.style.setProperty('width', `${width}px`);				
			isOpenRef.current = true;
			return;
		}	
	}

	return (
		<div className='p-absolute replay-target-container'>
			<div className='p-relative'>
				<Clear
					className='font-small cursor-pointer p-absolute'
					onClick={setdefaultCommentsId}
				/>
				<div 
					className='p-absolute replay-target bg-primary transition-4s-eio'
					onClick={onSetOpen}
				>
					<p className='m-0 text-white'>
						R:
					</p>
				</div>
				<div 
					className='p-absolute replay-target-name bg-primary cursor-pointer transition-4s-eio'
					onClick={onSetOpen}
				>
					<span ref={widthRef}>
						<p className='text-white m-0'>
							{replayName}
						</p>
					</span>
				</div>
			</div>
		</div>
	)
}
export default ReplayTarget;