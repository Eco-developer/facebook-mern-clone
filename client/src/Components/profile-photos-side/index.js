import PhotosContainer from '../photos-container/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import { useProfile } from '../../hooks/index.js';
import { useParams } from 'react-router-dom';

const ProfilePhotosSide = ({onClick}) => {
	const { 
		userInfo: { 
			photos,
			_id, 
		} 
	} = useProfile();
	const { userid } = useParams();

	return (
		<PostLoyout>
			<div className='d-flex align-items-center flex-grow-1 justify-content-between'>
				<h5 className='m-0 text_black cursor-default'>Photos</h5>
				<h6
					className='m-0 text-primary cursor-pointer'
					onClick={onClick}
				>
					See all Photos
				</h6>
			</div>
			<PhotosContainer
				photos={userid === _id ? photos.slice(0, 5) : photos.slice(0, 6)}
				size='photos-side'
			/>
		</PostLoyout>
	)
}
export default ProfilePhotosSide;