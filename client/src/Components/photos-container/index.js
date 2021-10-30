import PhotoCard from '../photo-card/index.js';
import AddPhoto from '../add-photo/index.js';
import EditProfileObserver from '../edit-profile-observer/index.js';
import {v4 as uuid} from 'uuid';

const PhotosContainer = ({photos, size, InnerComponent}) => {
	return (
		<div className='d-flex flex-row mn-1 mt-1 mb-1 flex-wrap flex-grow-1'>
			{photos.length ?
			photos.map((photo, index) => (
				<>
					<PhotoCard 
						key={uuid()}
						size={size}
						photo={photo}
						InnerComponent={InnerComponent}
					/>
					{photos.length - 1 === index &&
						<EditProfileObserver>
							<AddPhoto
								key={uuid()}
								size={size}
							/>
						</EditProfileObserver>
					}
				</>
			))
			: 	<EditProfileObserver>
					<AddPhoto
						key={uuid()}
						size={size}
					/>
				</EditProfileObserver>
			}
		</div>
	)
}

export default PhotosContainer;