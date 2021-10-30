import Form from '../index.js';
import Input from '../../Input/index.js';
import Button from '../../Buttons/index.js';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserData } from '../../../actions/index.js';
import { THIRD_STEP, SIGNUP_PAGE } from '../../../Const/routes.js';
import { emailPattern, passwordPattern } from '../../../Const/patterns.js'

const mapStateToProps = (state) => (
	{userData : state.userData}
)

const mapDispatchToProps = (dispatch) => {
	return {
		setUserData: (data) => dispatch(updateUserData(data)),
	};
};

const ConnectedSecondStepForm = ({userData, setUserData, setProgress}) => {
    
	const [email, setEmail] = useState(userData?.email || '');
	const [passwordOne, setPasswordOne] = useState(userData?.password || '');
	const [passwordTwo, setPasswordTwo] = useState(userData?.password || '');
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState({});
	const { push } = useHistory();
	const emailValidator = new RegExp(emailPattern);
	const passwordValidator = new RegExp(passwordPattern);

	const valid = email && emailValidator.test(email)  && passwordOne && passwordValidator.test(passwordOne) && passwordTwo && passwordOne === passwordTwo;

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserData({ email, password: passwordOne })
		setProgress((prevState) => ({...prevState, thirdStep: true}))
		push(THIRD_STEP);
	}

	const goBack = () => {
		push(SIGNUP_PAGE);
	}

	const validateInput = (condition, empty, target) => {
		if (empty) {
			setSuccess((prevState) => ({...prevState, [target]: false}))
			setErrors((prevState) => ({...prevState, [target]: false}))
			return;
		}
		if (!condition) {
			setErrors((prevState) => ({...prevState, [target]: true}))
			setSuccess((prevState) => ({...prevState, [target]: false}))
		} else {
			setErrors((prevState) => ({...prevState, [target]: false}))
			setSuccess((prevState) => ({...prevState, [target]: true}))
		}
	}

	const onChangeEmail = (e) => {
		const { value, id } = e.target;
		setEmail(value);
		validateInput(emailValidator.test(value), value === "", id);
	}

	const onChangePasswordOne = (e) => {
		const { value, id } = e.target;
		setPasswordOne(value);
		validateInput(passwordValidator.test(value), value === "", id);
	}

	const onChangePasswordTwo = (e) => {
		const { value, id } = e.target;
		setPasswordTwo(value);
		validateInput(value === passwordOne, value === "", id);
	}

	return (
		<div className='container-fluid pb-2 pt-2'>
		  <div className='container w-r'>
		
			<Form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor="emailInput">
						Email address:<strong className='text-danger'> *</strong>
					</label>
					<Input
						id='emailInput'
						value={email}
						type="email"
						placeholder='Enter a valid email address'
						highlight={`${errors?.emailInput ? 'is-invalid' : ''}${success?.emailInput ? 'is-valid' : ''}`}
						onChange={onChangeEmail}
					/>
					{errors?.emailInput && 
						<small className='text-danger p-1'>
							this email address is invalid.
						</small>}
				</div>
				<div className='form-group p-relative'>
					<label htmlFor="passwordOneInput">
						Password:<strong className='text-danger'> *</strong>
					</label>
					<Input
						id='passwordOneInput'
						value={passwordOne}
						type="password"
						placeholder='Enter a password'
						highlight={`${errors?.passwordOneInput ? 'is-invalid' : ''}${success?.passwordOneInput ? 'is-valid' : ''}`}
						onChange={onChangePasswordOne}
					/>
					{errors?.passwordOneInput && 
						<div className='box-warning'>
							<small className='text-danger p-1'>
							Password must be min 8 characters
							long, contain at least one digit, one lower case, one upper case and one special character.
							</small>
						</div>}
				</div>
				<div className='form-group'>
					<label htmlFor="passwordTwoInput">
						Repit password:
					</label>
					<Input
						id='passwordTwoInput'
						value={passwordTwo}
						type="password"
						placeholder='repit password'
						highlight={`${errors?.passwordTwoInput ? 'is-invalid' : ''}${success?.passwordTwoInput ? 'is-valid' : ''}`}
						onChange={onChangePasswordTwo}
					/>
					{errors?.passwordTwoInput && 
						<small className='text-danger p-1'>
							Both passwords must be the same.
						</small>}
				</div>
				<div className='form-group d-flex flex-grow-1'>
					<Button 
						className='btn btn-primary bg-white border border-primary text-primary flex-grow-1 mr-2'
						onClick={goBack}
					>
						back
					</Button>
					<Button 
						type='submit' 
						onClick={handleSubmit}
						disabled={ !valid ? true : false}
					>
						Next
					</Button>
				</div>	
			</Form>
		  </div>
		</div>
	)
}

const SecondStepForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedSecondStepForm);

export default SecondStepForm;