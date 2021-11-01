import Form from '../index.js';
import Input from '../../Input/index.js';
import Button from '../../Buttons/index.js';
import Select from '../../Select/index.js';
import SingupError from '../../singup-error/index.js';
import CreatAccountLoader from '../../create-account/index.js';
import axios from 'axios';
import csc from 'country-state-city';
import FACEBOOK_API from '../../../Const/facebookApi.js';
import { CircularProgress } from '@material-ui/core';
import { 
	useState, 
	useEffect
} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
	setDefaultData,
	requestData
} from '../../../actions/index.js';
import { SECOND_STEP } from '../../../Const/routes.js';

const mapStateToProps = (state) => (
	{ userData : state.userData }
)

const mapDispatchToProps = (dispatch) => {
	return {
		setDefaultData: () => dispatch(setDefaultData()),
		seedInitialData: () => dispatch(requestData())
	};
};

const ConnectedThirdStepForm = ({userData, setDefaultData, seedInitialData}) => {
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedState, setSelectedState] = useState("");
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [creatingLoading, setCreatingLoading] =  useState(false);
	const [error, setError] = useState(null);
	const { push } = useHistory();

	useEffect(() => {
		const getContries = async () => {
			try {
				const data = await csc.getAllCountries();

				let allCountries = [];
				allCountries = data?.map(({isoCode, name, phonecode, flag}) => ({
					isoCode,
					name,
					phonecode,
				}));
				const [firstCountry] = allCountries;
				setCountries(allCountries)
				setSelectedCountry(firstCountry);
			} catch (error){
				console.log(error.message);
			}
		}
		getContries();
	}, [])

	useEffect(() => {
		const getStates = async () => {
			try {
				const data = await csc.getStatesOfCountry(selectedCountry.isoCode);

				let allStates = [];
				allStates = data?.map(({isoCode, name}) => ({
					isoCode,
					name,
				}));
				const [firstState] = allStates;
				setStates(allStates)
				setSelectedState(firstState);
				if (isLoading) {setIsLoading(false)}	
			} catch (error){
				console.log(error.message);
			}
		}
		getStates();
	}, [selectedCountry])

	const handleSubmit = async (e) => {
		e.preventDefault();
		setCreatingLoading(true);
		const user = {
			country: selectedCountry.name,
			state: selectedState?.name || '',
			phone_number: `+${selectedCountry.phonecode} ${phoneNumber}`,
			genre: '',
			civil_state: '',
			displayPhoto: '',
			...userData,
			email: userData.email.toLowerCase(),
		}
		try {
			const response = await axios.post(`${FACEBOOK_API}sign-up`, {...user})
			console.log(response.data)
			if (response.data) {
				const signUpUser = {
					email: user.email, 
					password: user.password,
				}
				const response = await axios.post(
					`${FACEBOOK_API}login`, 
					{...signUpUser},
					{withCredentials: true}
					)
				console.log(response.data)
				setDefaultData()
				seedInitialData();
			}
		} catch (error) {
			if ((error.response?.data)) {
				setCreatingLoading(false);
				setError(error.response.data);
			}
		}		
	}

	const onChangeCountry = (obj) => {
		setSelectedCountry(obj);
	}

	const onChangeState = (obj) => {
		setSelectedState(obj)
	}

	const onChangePhone = (e) => {
		const { value } = e.target
		setPhoneNumber(value);
	}

	const goBack = () => {
		push(SECOND_STEP);
	}

	const handleError = () => {
		setError(null);
	}
	
	return (
		isLoading ? 
		<div className='container-fluid d-flex justify-content-center align-items-center loading pt-3'>
			<CircularProgress/>
		</div>
		:
		<div className='container-fluid pb-2 pt-2'>
		  <div className='container w-r'>
			<Form onSubmit={handleSubmit}>
				<div className='form-group p-relative'>
					<label htmlFor="country">
						Country:<strong className='text-danger'> *</strong>
					</label>
					<Select
						id="country"
						options={countries}
						currentOption={selectedCountry?.name} 
						spec='name'
						onChange={onChangeCountry}
					/>
				</div>
				<div className='form-group p-relative'>
					<label htmlFor="state">
						State:
					</label>
					<Select
						id="state"
						options={states}
						currentOption={selectedState?.name} 
						spec='name'
						onChange={onChangeState}
					/>
				</div>
				<label>
					Phone number:<strong className='text-danger'> *</strong>
				</label>
				<div 
					className='form-group d-flex align-items-center justify-content-between'
				>
					<div 
						className='form-control mr-3'
						style={{width: '140px'}}
					>
						+{selectedCountry?.phonecode}
					</div>
					<Input 
						value={phoneNumber}
						onChange={onChangePhone}
						highlight='flex-grow-1'
						id='phoneInput'
					/>
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
						disabled={!phoneNumber}
					>
						Submit
					</Button>
				</div>	
			</Form>
			{error && 
				<SingupError 
					error={error}
					onClick={handleError}
				/>
			}
			{creatingLoading ?
				<CreatAccountLoader/>
			: null}
		  </div>
		</div>	
	)
}

const ThirdStepForm = connect(
	mapStateToProps, 
	mapDispatchToProps
)(ConnectedThirdStepForm);
export default ThirdStepForm;