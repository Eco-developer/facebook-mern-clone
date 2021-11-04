import fallbackImg from '../../Images/covid-fullback-img.jpg';
import { PostLoyout } from '../Loyouts/index.js';

const Articule = ({source='', title, description, url, urlToImage}) => (
	<a 
		href={url} 
		target='_blank'
		rel='noreferrer'
	>
		<PostLoyout>
			<div className='d-flex w-100 align-items-center'>
				<div className='p-relative news-img-container'>
					<img 
						className='news-img'
						src={urlToImage || fallbackImg}
						alt='articule'
					/>
				</div>
				<div className='d-flex flex-column articule-details'>
					<div className='ml-2'>
						<h6 className='m-0 text-primary'>
							{title}
						</h6>
					</div>
					<div className='ml-2 articule-description'>
						<p className='m-0 text_black'>
							{description}	
						</p>
					</div>
					<div className='ml-2'>
						<p className='m-0 text-secondary'>
							{source}	
						</p>
					</div>
				</div>
			</div>
		</PostLoyout>
	</a>
)


export default Articule;