import {v4 as uuid} from 'uuid';

const StoryMarker = ({amount, storyCurrentIndex}) => {
	const markersActive = Array(storyCurrentIndex+1).fill('');
	const end = (amount - storyCurrentIndex - 1) === 0;
	const markersInactive = !end ? Array(amount-storyCurrentIndex-1).fill('') : [];
	return (
		<div className='story-marker-container ml-2 mr-2'>
			{markersActive.map((marker)=> (
				<div 
					className='story-marker'
					key={uuid()}
				>
				</div>
			))}
			{!end ?
				markersInactive.map((marker)=> (
					<div 
						className='story-marker-inactive'
						key={uuid()}
					>
					</div>
				))
			:null}
		</div>
	)
}

export default StoryMarker;