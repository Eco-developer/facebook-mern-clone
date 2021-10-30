import { CircularProgress } from '@material-ui/core';
import logo from '../../Images/social-facebook-2019-circle-512.webp';

const Loading = () => (
	<div className='w-100 vh-100 bg-white d-flex justify-content-center align-items-center loading'>
		<div className='d-flex flex-column align-items-center'>
			<img 
				src={logo} 
				alt="logo"
				className='mb-3'
				style={{
					width: '100px',
					height: '100px'
				}}
			/>
			<CircularProgress 
				className="text-primary"
				style={{
					width: '70px',
					height: '70px'
				}}
			/>
		</div>
	</div>
)

export default Loading;