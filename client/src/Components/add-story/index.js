import { Add } from '@material-ui/icons';

const AddStory = () => {
	return (
		<div className='add-story-container h-fill'>	
			<div className='text-white bg-primary add-circle'>
				<Add/>
			</div>
			<div className='add-story bg-white p-absolute'>
				<p className='text_black m-0'>Add a Story</p>
			</div>
		</div>
	)
}

export default AddStory;