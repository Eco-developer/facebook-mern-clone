import FeedSide from '../feed-side/index.js';
import PeopleSearchBar from '../people-search-bar/index.js';
import VideoCategory from '../video-category/index.js';
import {
	Album,
	Movie,
	LiveTv,
	SportsSoccer,
	YouTube,
	Stars, 
	GitHub
} from '@material-ui/icons';

const VideosSide = () => (
	<FeedSide>
		<div className='d-flex flex-column h-fill pb-1'>
			<div className='w-100 mb-2'>
				<h5 className='m-0 text_black'>
					Watch
				</h5>
			</div>
			<PeopleSearchBar/>
			<div className='overflow-y flex-grow-1'>
				<div className='height-fit d-flex flex-column'>
					<VideoCategory
						category='Trending'
						Icon={YouTube}
					/>
					<VideoCategory
						category='Software development'
						query='MERN'
						Icon={GitHub}
					/>
					<VideoCategory
						category='Movies'
						query='movies'
						Icon={Movie}
					/>
					<VideoCategory
						category='Football'
						query='football'
						Icon={SportsSoccer}
					/>
					<VideoCategory
						category='Tv Series'
						query='series'
						Icon={LiveTv}
					/>
					<VideoCategory
						category='Marvel'
						query='marvel'
						Icon={Stars}
					/>
					<VideoCategory
						category='Music'
						query='music'
						Icon={Album}
					/>
				</div>
			</div>
		</div>			
	</FeedSide>		
)

export default VideosSide;