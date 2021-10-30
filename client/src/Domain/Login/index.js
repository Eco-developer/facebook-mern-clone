import { SignInForm } from '../../Components/Forms/index.js';
import logo from '../../Images/social-facebook-2019-circle-512.webp';

const Login = () => {
	return (
		<div className='mw-100 vh-100 d-flex justify-content-center align-items-center flex-column'>
			<div className='container d-flex justify-content-center align-items-center mb-4'>
				<img 
					src={logo} 
					alt="logo" 
					style={{objectFit: 'contain',
						height: '100px',
					}}
					/>
			</div>
			<SignInForm/>
		</div>
	)
}

export default Login;