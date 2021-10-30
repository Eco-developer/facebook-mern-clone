import PhotoCardBase from '../photo-card-base/index.js';
import AddAPhoto from '../add-a-photo/index.js';
import AddAPhotoIcon  from '@material-ui/icons/AddAPhoto';
import { useState } from 'react';

const AddPhoto = ({size}) => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};
	return (
		<>
			<PhotoCardBase
				onClick={handleToggle}
				size={`${size} add-photo rounded`}
				Icon={AddAPhotoIcon}
			/>
			{toggle && 
				<AddAPhoto
					handleToggle={handleToggle}
				/>
			}
		</>
	)
}

export default AddPhoto;