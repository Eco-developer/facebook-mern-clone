import { PostLoyout } from '../Loyouts/index.js'
import logo from '../../Images/social-facebook-2019-circle-512.webp';
import { CircularProgress } from '@material-ui/core';

const CreatAccountLoader = ({name=''}) => (
	<div className='re-post-container'>
		<PostLoyout mnres={false}>		
			<div className='d-flex align-items-center justify-content-center flex-column flex-grow-1'>
				<img 
					src={logo} 
					alt="logo"
					className='mb-2'
					style={{
						width: '120px',
						height: '120px'
					}}
				/>
				<CircularProgress 
					className="text-primary mb-2"
					style={{
						width: '80px',
						height: '80px'
					}}
				/>
				<div>
					<h6 className='m_0 text_black'>
						Creating {name} facebook-clone account
					</h6>
				</div>
			</div>
		</PostLoyout>
	</div>
)

export default CreatAccountLoader;