import EditPost from '../edit-post/index.js';
import { IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { useState } from 'react';

const EditPhoto = ({photo, onClick}) => {
	const [toggleEdit, setToggleEdit] = useState(false);
	const handleToggleEdit = () => {
		setToggleEdit(!toggleEdit);
	};
	return (
		<>
			<div className='height-fit bg-secondary-05 rounded rounded-circle'>
				<IconButton onClick={handleToggleEdit}>
					<Edit className='text_black'/>
				</IconButton>
			</div>
			{toggleEdit ?
				<EditPost
					data={photo}
					onClose={handleToggleEdit}
				/> : null
			}
		</>
	)
}

export default EditPhoto;