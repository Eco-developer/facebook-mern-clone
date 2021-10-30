import SearchBar from '../search-bar/index.js';
import { useState } from 'react';
import { useFeedPeopleState } from '../../hooks/index.js';

const PeopleSearchBar = () => {
	const [searchValue, setSearchValue] = useState('');
	const { dispatch } = useFeedPeopleState();

	const onChange = (e) => {
		const { value } = e.target;
		setSearchValue(value);
		if (!value) {
			dispatch({type: 'SET_DEFAULT_SEARCHKEY'});
		}
	}

	const handleSearchKey = () => {
		dispatch({
			type: 'SET_SEARCHKEY',
			payload: searchValue
		})
	}

	return (
		<SearchBar
			onChange={onChange}
			onClick={handleSearchKey}
			value={searchValue}
		/>
	)
}

export default PeopleSearchBar;