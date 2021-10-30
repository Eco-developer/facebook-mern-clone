import Form from '../index.js';
import Input from '../../Input/index.js';
import Button from '../../Buttons/index.js';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserData } from '../../../actions/index.js';
import { SECOND_STEP } from '../../../Const/routes.js';

const mapStateToProps = (state) => (
	{userData : state.userData}
)

const mapDispatchToProps = (dispatch) => {
	return {
		setUserData: (data) => dispatch(updateUserData(data)),
	};
};

const ConnectedFirstStepForm = ({userData, setUserData, setProgress}) => {
	const [name, setName] = useState(userData?.name || '');
	const [lastname, setLastname] = useState(userData?.lastname || '');
	const { push } = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		
		setProgress((prevState) => ({...prevState, secondStep: true}))
		setUserData({name, lastname})
		push(SECOND_STEP);
	}

	const onChangeName = (e) => {
		const {value} = e.target;
		setName(value);
	}

	const onChangeLastName = (e) => {
		const {value} = e.target;
		setLastname(value);
	}

	return (
		<div className='container-fluid pb-2 pt-2'>
		  <div className='container w-r'>
		
			<Form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor="nameInput">
						Firstname:<strong className='text-danger'> *</strong>
					</label>
					<Input
						id='nameInput'
						value={name}
						type="text"
						placeholder='Your name'
						onChange={onChangeName}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor="lastnameInput">
						Lastname:<strong className='text-danger'> *</strong>
					</label>
					<Input
						id='lastnameInput'
						value={lastname}
						type="text"
						placeholder='Your Lastname'
						onChange={onChangeLastName}
					/>
				</div>
				<div className='form-group d-flex flex-grow-1'>
					<Button 
						type='submit' 
						onClick={handleSubmit}
						disabled={name && lastname ? false : true}
					>
						Next
					</Button>
				</div>	
			</Form>
		  </div>
		</div>
	)
}

const FirstStepForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedFirstStepForm);

export default FirstStepForm;