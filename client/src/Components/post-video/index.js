import Video from '../Video/index.js';
import Avatar from '@material-ui/core/Avatar';
import src from '../../Images/maxresdefault.jpg';
import { PostLoyout } from '../Loyouts/index.js';

const PostVideo = ({videoId}) => (
	<PostLoyout extend='maxw-800'>
		<div className='d-flex align-items-center mb-2 flex-grow-1 p-relative'>
			<Avatar 
				src={src}
			/>
			<div className='d-flex align-items-center flex-grow-1 pr-2 pl-2'>
				<h6 className='m-0 text_black'>
					YouTube
				</h6>
			</div> 
		</div>	
		<Video
			videoId={videoId}
		/>
	</PostLoyout>
)

export default PostVideo;