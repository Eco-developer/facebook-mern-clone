const initialState = {
	searchKey: '',
};

const reducer = (state, action) => {
	switch(action.type) {
		case 'SET_SEARCHKEY':
			return {searchKey: action.payload};
		case 'SET_DEFAULT_SEARCHKEY':
			return {searchKey: ''};
		default:
			return state;
	}
}

const searchReducer = {reducer, initialState};

export default searchReducer;