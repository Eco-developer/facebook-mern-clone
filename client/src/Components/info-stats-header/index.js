import Flag from '../flag/index.js';
import { PostLoyout } from '../Loyouts/index.js';

const InfoStatsHeader = ({src=null, name}) => (
	<div>
		<PostLoyout>
			<div className='d-flex align-items-center'>
				<Flag
					src={src ? src : 'https://besthqwallpapers.com/Uploads/26-5-2019/94002/thumb2-flag-of-united-nations-4k-stone-background-grunge-flag-international-organizations.jpg'}
					alt='flag'
				/>
				<div className='ml-2'>
					<h5 className='m-0 text_black'>
						{name || 'Worldwide'}
					</h5>
				</div>
			</div>
		</PostLoyout>
	</div>
)

export default InfoStatsHeader;