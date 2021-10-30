import FilterDropDownContainer from '../filter-dropdown-container/index.js';
import SelectedOption from '../selected-option/index.js';
import csc from 'country-state-city';
import { 
	useState, 
	useEffect,
} from 'react';
import { useFeedPeopleState } from '../../hooks/index.js';

const PeopleFilterBar = () => {
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);

	const {
		state: {
			filter: {
				selectedCountry,
				selectedState,
			}
		},
		dispatch,
	} = useFeedPeopleState();

	useEffect(() => {
		const getContries = async () => {
			try {
				const data = await csc.getAllCountries();

				let allCountries = [];
				allCountries = data?.map(({isoCode, name}) => ({
					isoCode,
					name,
				}));
				setCountries(allCountries)
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
				dispatch({type: 'SET_DEFAULT_STATE'})
				setStates(allStates)
			} catch (error){
				console.log(error.message);
			}
		}

		if (selectedCountry) {
			getStates();
		}
	}, [selectedCountry])

	const handleFilters = (filters) => {
		switch(filters.type) {
			case 'Country': {
				dispatch({
					type: 'SET_SELECTED_COUNTRY',
					payload: filters.payload
				})
				return;
			}
			case 'State': {
				dispatch({
					type: 'SET_SELECTED_STATE',
					payload: filters.payload
				})
				return;
			}
			default:{
				dispatch({type: 'SET_DEFAULT'})
				setStates([]);
				return;
			}		
		}
	}

	const setDefaultCountry = () => {
		dispatch({type: 'SET_DEFAULT_COUNTRY'})
	}

	const setDefaultState = () => {
		dispatch({type: 'SET_DEFAULT_STATE'})
	}

	return (
		<div className='d-flex flex-column'>
			<div className='pb-1 mb-1 border-bottom border-ws'>
				<h6 className='m-0 text_black'>Filter By</h6>
			</div>
			<div className='d-flex w-100 mt-1 mb-1'>
				<SelectedOption 
					option={selectedCountry}
					extend='mr-1'
					onClick={setDefaultCountry}
				/>
				<SelectedOption 
					option={selectedState}
					extend='ml-1'
					onClick={setDefaultState}
				/>
			</div>
			<FilterDropDownContainer
				filter='Country'
				options={countries}
				handleFilters={handleFilters}
				selected={selectedCountry}
			/>
			<FilterDropDownContainer
				filter='State'
				options={states}
				handleFilters={handleFilters}
				selected={selectedState}
			/>
		</div>
	)
}

export default PeopleFilterBar;