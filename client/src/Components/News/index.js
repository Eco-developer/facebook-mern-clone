import StoryReel from '../../Components/story-reel/index.js'
;
import WriteSomething from '../../Components/write-something/index.js'
import Posts from '../Posts/index.js';


const News = () => {
	return (
		<div className='col-md-main-custom m-0 p-0 overflow-y d-flex'>
			<div className='d-flex p-3 flex-column w-100 height-fit'>
				<StoryReel/>
				<WriteSomething/>
				<Posts/>
			</div>
		</div>
	)
}

export default News;