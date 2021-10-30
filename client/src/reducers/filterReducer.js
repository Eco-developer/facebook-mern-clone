const initialState = {
	selectedCountry: '',
	selectedState: '',
};

const reducer = (state, action) => {
	switch(action.type) {
		case 'SET_SELECTED_STATE':
			return {...state, selectedState: action.payload};
		case 'SET_SELECTED_COUNTRY': 
			return {...state, selectedCountry: action.payload};
		case 'SET_DEFAULT_STATE':
			return {...state, selectedState: ''};
		case 'SET_DEFAULT_COUNTRY':
			return {...state, selectedCountry: ''};
		case 'SET_DEFAULT':
			return initialState;
		default:
			return state;
	}
}

const filterReducer = {reducer, initialState};

export default filterReducer;