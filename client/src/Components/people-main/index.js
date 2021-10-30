import PeopleContainer from '../people-container/index.js';
import { FeedSubLayout } from '../Loyouts/index.js';
import { 
	filterPeople,
 	search
} from '../../services/Selectors/index.js';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFeedPeopleState } from '../../hooks/index.js';
import {v4 as uuid} from 'uuid';
import { getFriends } from '../../services/Selectors/index.js';
import { setLoadingProfile } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoading: (status) => dispatch(setLoadingProfile(status)),
	};
};

const mapStateToProps = (state) => (
	{ 
		users: state.users, 
		uId: state.user._id,
	}
)

const PeopleMainBase = ({users, uId, handleLoading}) => {
	const { push } = useHistory();
	const {
		state: {
			filter: {
				selectedCountry,
				selectedState,
			},
			search: { searchKey }
		}
	} = useFeedPeopleState();

	const people = getFriends(users, uId);
	if (!people.length) {
		<FeedSubLayout>
			<h4>You are the only one here</h4>
		</FeedSubLayout>
	}

	const goToProfile = (id) => {
		handleLoading(true);
		push(id);
	};

	const filtered = filterPeople(search(people, searchKey), selectedCountry, selectedState);
	return (
		<FeedSubLayout>
			{filtered.length ? filtered.map(({_id, displayPhoto, displayName, state, country}) => (
				<PeopleContainer
					key={uuid()}
					id={_id}
					goToProfile={goToProfile}
					src={displayPhoto}
					name={displayName}
					state={state}
					country={country}
				/>
			))
			: <h5>There are no matching results</h5>}
		</FeedSubLayout>
	)
}

const PeopleMain = connect(
	mapStateToProps,
	mapDispatchToProps
)(PeopleMainBase);

export default PeopleMain;