import PhotosContainer from '../photos-container/index.js';
import EditPhoto from '../edit-photo/index.js';
import { ProfilePagesLoyout, PostLoyout } from '../Loyouts/index.js';
import { useProfile } from '../../hooks/index.js';

const ProfilePhotosMain = () => {
  const { userInfo: { photos } } = useProfile();
  return (
  	<ProfilePagesLoyout extend='plr-0'>
  		<PostLoyout 
  			extend='w-100 border-none'
  			mnres={false}

  		>
  			<div className='d-flex flex-grow-1'>
  				<div className='flex-grow-1'>
  					<h5 className='m-0 text_black cursor-default'>
  						Photos
  					</h5>
  				</div>
  				<div>
  					<p className='m-0 text-primary cursor-pointer'>
  						Add Poto/Video
  					</p>
  				</div>
  			</div>
  			<PhotosContainer
  				photos={photos}
  				size='photos-main'
  				InnerComponent={EditPhoto}
  			/>
  		</PostLoyout>
  	</ProfilePagesLoyout>
  )
}

export default ProfilePhotosMain;