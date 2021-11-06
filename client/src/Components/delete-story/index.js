import FACEBOOK_API from '../../Const/facebookApi.js';
import axios from 'axios';
import { MoreVert } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
	useState,
	useEffect
} from 'react';
import { deleteStory } from '../../actions/index.js';

const mapStateToProps = (state) => (
	{ uId: state.user._id }
)

const mapDispatchToProps = (dispatch) => {
	return {
		handleDeleteStory: (id) => dispatch(deleteStory(id))
	};
};

const DeleteStoryBase = ({userId, storyId, uId, handleLeftControl, handleDeleteStory}) => {
	const [display, setDisplay] = useState(false);
	const isCurrentUser = userId === uId;
	
	useEffect(() => {
		if (display) {
			setDisplay(false);
		}
	}, [storyId])

	const handleDisplay = () => {
		setDisplay((state) => !state);
	};

	const handleSubmit = async () => {
		try {
			handleLeftControl();
			handleDisplay();
			await axios.delete(
				`${FACEBOOK_API}delete/story/${storyId}`);
			handleDeleteStory(storyId)
		} catch (err) {
			console.log(err);
		}
	};

	return (
		isCurrentUser ?
			(<div className='p-relative ml-1'>
					<MoreVert 
						className='text-white cursor-pointer'
						onClick={handleDisplay}
					/>
					{display ?
						<Delete onClick={handleSubmit}/>
					: null}
			</div>)
		: null
	)
}

const Delete = ({onClick}) => (
	<div 
		className='p-absolute story-settings cursor-pointer p-2 pl-3 pr-3 bg-white rounded-10 shadow-md transition-4s-eio'
		onClick={onClick}
	>
		<p className='m-0 text_black'>
			Delete
		</p>
	</div>
)


const DeleteStory = connect(
	mapStateToProps,
	mapDispatchToProps
)(DeleteStoryBase);

export default DeleteStory;