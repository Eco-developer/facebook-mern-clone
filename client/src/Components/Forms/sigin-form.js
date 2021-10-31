import Form from './index.js';
import Input from '../Input/index.js';
import Button from '../Buttons/index.js';
import CustomError from '../Error/index.js';
import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGNUP_PAGE } from '../../Const/routes.js';
import { connect } from 'react-redux';
import { requestData } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		seedInitialData: () => dispatch(requestData())
	};
};

const SignInFormBase = ({seedInitialData}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {email, password};
		try {
			const response = await axios.post(
				`${FACEBOOK_API}login`,
				{...user}, 
				{withCredentials: true}
			)
			
			if (response.data) {
				seedInitialData();
			}
		} catch (error) {
			setError(error.response.data);		
		}
	}

	const onChangeEmail = (e) => {
		const {value} = e.target;
		if (error) {setError(null)}
		setEmail(value);
	}

	const onChangePassword = (e) => {
		const {value} = e.target;
		if (error) {setError(null)}
		setPassword(value);
	}

	return (
		<div className='container w-r pb-2 pt-3'>
			<Form onSubmit={handleSubmit}>
				<div className='form-group d-flex flex-column'>
					<Input
						id='emailInput'
						value={email}
						type="email"
						placeholder='Email adress'
						onChange={onChangeEmail}
					/>
					{error && 
						<CustomError
							error={error}
							type='email'
						/>}
				</div>
				<div className='form-group d-flex flex-column'>
					<Input
						id='passwordInput'
						value={password}
						type="password"
						placeholder='Password'
						onChange={onChangePassword}
					/>
					{error && 
						<CustomError
							error={error}
							type='password'
						/>}					
				</div>
				<div className='form-group'>
					<Button 
						className='btn btn-primary w-100'
						type='submit'
						disabled={!email || !password || error}
					>
						Sign in
					</Button>
				</div>	
				<div className='form-group'>
					<p>
						Do not have an account? <Link to={SIGNUP_PAGE} className='signup-link'>create one </Link> 
					</p>
				</div>
			</Form>
		</div>
	)
}

const SignInForm = connect(
	null,
	mapDispatchToProps
)(SignInFormBase);

export default SignInForm;